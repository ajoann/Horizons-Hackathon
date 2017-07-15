import React from 'react';
import RoomListComponent from './RoomListComponent';
import GetHelpComponent from './GetHelpComponent';

// class component
class TutorHomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: this.props.socket,
      courses: [],
      roomName: 'ROOMSLIST'
    }

    const tutorUsername = "Tutor"+Math.round(Math.random()*1000);
    localStorage.setItem('username', tutorUsername);
  }

  join(room) {
    // this.setState({roomName: room});
    this.state.socket.emit('room', {requestedRoom: room, username: this.state.username});
    console.log('reaches join in get help');
  }

  componentDidMount() {
    this.join(this.state.roomName);
    this.state.socket.emit('getrooms');

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

  componentWillReceiveProps(nextProps) {
    console.log('REACHES RECEIVE PROPS');
    if (nextProps.courses /* && !equalObjects(nextProps.courses, this.state.courses) */) {
      this.setState({courses: nextProps.courses});
    }
  }

  render() {
    console.log('TUTOR HOME: ', this.state.socket);
    // console.log('props in tutor home:', props);

    return (
      <div>
        <RoomListComponent socket={this.state.socket}
          room={'ROOMSLIST'}
          courses={this.state.courses} />
      </div>
    );
  };
}

export default TutorHomeComponent;
