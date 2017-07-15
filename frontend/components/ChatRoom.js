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
      roomName: props.match.params.grade + ' ' + props.match.params.subject, // CHANGE TO SUBJECT AND GRADE
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
