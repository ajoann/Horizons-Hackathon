import React from 'react';
// class component
class RoomPreviewComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in room preview:', props);

    this.state = {
      socket: props.socket,
      courses: props.courses,
      username: localStorage.getItem('username')
    };
  }

  componentDidMount() {
    // this.state.socket.emit('getrooms');
    //
    // this.state.socket.on('getrooms', (rooms) => {
    //   console.log('CLIENT RECEIVED ROOM', rooms);
    //   let newCourses = [];
    //   Object.keys(rooms).map((roomName, index) => {
    //     if (roomName !== 'ROOMSLIST') {
    //       const bp = roomName.indexOf(' ');
    //       const grade = roomName.substring(0, bp);
    //       const subject = roomName.substring(bp+1, roomName.length);
    //       newCourses.push({Grade: grade, Course: subject, Count: rooms[roomName].length});
    //     }
    //   });
    //   console.log('NEW COURSES: ',newCourses);
    //   this.setState({courses: newCourses});
    // });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.courses /* && !equalObjects(nextProps.courses, this.state.courses) */) {
      this.setState({courses: nextProps.courses});
    }
  }

  equalObjects (obj1, obj2) {
    Object.keys(obj1).map((key, index) => {
      if (!obj1[key] || !obj2[key] || (obj1[key] !== obj2[key])) {
        return false;
      }
      return true;
    });
  }

  render() {
    console.log('courses: ',this.state.courses);
    return(
      <div>
        {/* {this.state.courses.forEach((course) => {

        })} */}

        <div className={'flexbox'}>
          {this.state.courses.map((course, index) => (
            <button key={index} className={'classbutton'}>
              {/* GRADE: */}
              <span>Grade: {course.Grade} </span>
              {/* SUBJECT: */}
              <span> {course.Course}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default RoomPreviewComponent;
