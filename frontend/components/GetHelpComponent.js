import React from 'react';
import { Link, Route } from 'react-router-dom';
import RoomListComponent from './RoomListComponent';
import Routes from '../routes';

class GetHelpComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      socket: this.props.socket,
      grade: '--',
      subject: '--',
      currentRoom: false,
      username: localStorage.getItem('username'),
      courses: [],
      roomName: 'ROOMSLIST'
    }
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // console.log('SOCKET in get help: ', this.state.socket);
  }

  join(room) {
    this.setState({roomName: room});
    this.state.socket.emit('room', {requestedRoom: room, username: this.state.username});
    console.log('reaches join in get help');
  }

  componentDidMount() {
    this.join(this.state.roomName);
    this.state.socket.emit('getrooms');
    // this.state.socket.emit('room', {requestedRoom: 'ROOMSLIST', username: this.state.username});

    this.state.socket.on('getrooms', (rooms) => {
      console.log('CLIENT RECEIVED ROOM', rooms);
      let newCourses = [];
      Object.keys(rooms).map((roomName, index) => {
        if (roomName !== 'ROOMSLIST') {
          const bp = roomName.indexOf(' ');
          const grade = roomName.substring(0, bp);
          const subject = roomName.substring(bp+1, roomName.length);
          newCourses.push({Grade: grade, Subject: subject, Count: rooms[roomName].length});
        }
      });
      console.log('NEW COURSES: ',newCourses);
      this.setState({courses: newCourses});
    });
  }

  handleChangeGrade(e){
    this.setState({grade: e.target.value})
  }

  handleChangeSubject(e){
    this.setState({subject: e.target.value})
  }

  handleSubmit(e){
    console.log('submitting grade', this.state.grade, 'subject', this.state.subject)
    this.setState({currentRoom: true})
    e.preventDefault();
    if (this.state.grade !== "--" && this.state.subject !== "--") {
      const requestedRoom = this.getRoom();
      this.state.socket.emit('room', {requestedRoom, username: this.state.username});
    }
  }

  getRoom() {
    return (this.state.currentRoom) ? this.state.grade + ' ' + this.state.subject : 'ROOMSLIST';
  }

  componentWillReceiveProps(nextProps) {
    console.log('REACHES RECEIVE PROPS');
    if (nextProps.courses /* && !equalObjects(nextProps.courses, this.state.courses) */) {
      this.setState({courses: nextProps.courses});
    }
  }

  render(){
    const linkTo = "/chatroom/"+this.state.grade+"/"+this.state.subject;

    return (
      <div className={'flexboxcol'}>
        <span className="h1" style={{padding: '30px'}}>I need help in ....</span>
        <div className="flexcenter">
          <form onSubmit={this.handleSubmit} className={'flexbox'}>
            <label className="flexcolumncenter">
                <span className="h4" style={{marginLeft: '40px'}}>Select Your Grade</span>
              <select className="dropdown yellow" value={this.state.grade} onChange={this.handleChangeGrade} name="Grade" placeholder='Grade'>
                <option value="4">--</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </label>
            <label className="flexcolumncenter">
                <span className="h4" style={{marginLeft: '40px'}}>Select Your Course</span>
              <select className="dropdown yellow" value={this.state.subject} onChange={this.handleChangeSubject} name="Subject" placeholder='Subject'>
                <option value="Math">--</option>
                <option value="Math">Math</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="History">History</option>
                <option value="English">English</option>
                <option value="Art">Art</option>
                <option value="Biology">Biology</option>
              </select>
            </label>
          </form>
        </div>
        <Link className="h2" style={{flex:1}} to={linkTo}>

          <button className="loginbutton pink" type="submit">
            Go to Class!
            {/* <input type="submit" value="Submit" /> */}
          </button>
        </Link>

        {/* {(this.state.current_room) ?
          <ChatRoom grade={this.state.grade}
          subject={this.state.subject}
          username={this.state.username}
          socket={this.state.socket} />
          : */}
          <RoomListComponent
            grade={this.state.grade}
            subject={this.state.subject}
            room={this.getRoom()}
            courses={this.state.courses}
            socket={this.state.socket} />
        {/* } */}
      </div>
    );
  }
};

export default GetHelpComponent;
