import React from 'react';

import ChatRoomMessages from './ChatRoomMessages';

class ChatRoom extends React.Component {
  constructor (props) {
    super(props);
    console.log('CHATROOM PROPS: ', props);
    this.state = {
      socket: this.props.socket,
      activeUsers: [],
      username: localStorage.getItem('username'),
      roomName: props.match.params.grade + ' ' + props.match.params.subject,
      videoRoomLive: false,
      isTutor: false
    };
  }

  join(room) {
    // console.log(room);
    this.setState({roomName: room});
    this.state.socket.emit('room', {requestedRoom: room, username: this.state.username});
    console.log('reaches here in join');
  }

  componentDidMount() {
    this.join(this.state.roomName);
    // socket listeners added to ChatRoom as soon as it's rendered
    this.state.socket.on('updateusers', (data) => {
      this.setState({activeUsers: data})
    });

    if (this.state.username.indexOf('Tutor') === 0) {
      this.setState({isTutor: true});
    }
    console.log('IS TUTOR: ',this.state.isTutor, 'LIVE VIDEO: ',this.state.videoRoomLive);

    this.state.socket.on('startedCall', (tutorName) => {
      if (tutorName !== this.state.username) {
        const alertmsg = tutorName + " started a call for this room! Click the button below to join!";
        alert(alertmsg);
      }
      this.setState({videoRoomLive: true});
    });
  }
  emitStartCall () {
    this.state.socket.emit('startedCall', this.state.username);
  }

  render () {
    console.log('ACTIVE USERS: ', this.state.activeUsers);
    return (
      <div>
      <div className="chatcontainer">

        {/*title and number of people in room*/}
        <div className="chatboxheader">

          <div>
            <span className="h1">Grade {this.props.match.params.grade} {this.props.match.params.subject}</span>
          </div>
            {/* <div className = "chatbutton pink">
              <span className = "h4">Active Users: {this.state.activeUsers.length}</span>
            </div> */}
        </div>

        {this.state.isTutor && !this.state.videoRoomLive &&
        <button className="loginbutton yellow" style{{marginBottom: 0}}>
          <a href="https://plus.google.com/hangouts/_/calendar/MTIzbm9zcGFtYWpAZ21haWwuY29t.a7qqv3g4j3j8ubj4dr07a0db34">
            <span className="h4">Create Live Video Room</span>
          </a>
        </button>}
        {this.state.isTutor && !this.state.videoRoomLive &&
          <button className="loginbutton yellow" style={{width: '500px'}} onClick={() => this.emitStartCall()}>
            <span className="h4" style={{margin: 0}}>Invite Students!</span>
          </button>
        }
        {!this.state.isTutor && this.state.videoRoomLive &&
          <button className="loginbutton yellow" style={{width: '500px'}}>
            <a className="h4" href="https://plus.google.com/hangouts/_/calendar/MTIzbm9zcGFtYWpAZ21haWwuY29t.a7qqv3g4j3j8ubj4dr07a0db34">
              Join Live Video Room
            </a>
        </button>}

        <div class = "infoimg">
            <img src="/img/chatinstruct.png" class = "info"/>
        </div>

        <div id="chatroom_messages_box">

          <h4 className="text-center h5"> Current users: {this.state.activeUsers.map((user, index) => {
            var returnUser = user;
            if (index !== this.state.activeUsers.length-1) {
              returnUser += ", ";
            }
            return <span className="bold" key={index}> {returnUser}</span>  })}
          </h4>
          <ChatRoomMessages
            grade={this.props.match.params.grade}
            subject={this.props.match.params.subject}
            username={this.state.username}
            socket={this.state.socket}
          />
        </div>
      </div>
      <center><img src="/img/desk.png" className = "desk"/></center>
    </div>
    )
  }

}

export default ChatRoom;
