import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ActiveClass from './ActiveClass'
// class component
class RoomPreviewComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in room preview:', props);

    this.state = {
      socket: props.socket,
      courses: props.courses,
      username: localStorage.getItem('username'),
      preferences: [],
      isTutor: false
    };
  }

  componentDidMount() {
    const isTutor = this.state.username.indexOf('Tutor') === 0 ? true : false;
    this.setState({isTutor});
    axios.get('/api/initialize')
      .then((response) => {
        this.setState({preferences: response.data.user.local.preferences});
        console.log('room pre', this.state.preferences);

      })
      .catch((err) => {
        console.log(err)
      })
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
    const imgSrc = (this.state.isTutor) ? "/img/tutorinfo.png" : "/img/student.png";
    // console.log('username: ',this.state.username, this.state.username.indexOf('Tutor'));
    return(
      <div>
        <div className={'flexcenter'} style={{flexDirection: 'column'}}>
          <div className="infoimg">
            <img src="/img/tutorinfo.png" className="info" />
          </div>
          <div>
          { this.state.courses.length < 1 ?
            <div>
              <div className="h4 text-center">  No classes currently active.</div>
              {this.state.isTutor ?
                <div className="h4 text-center"> Come back another time when students are online!</div>
                :
                <div className="h4 text-center"> Add a class by selecting a Grade and Subject!</div>
              }
            </div>
            :
            <div>
              {/* <div className="infoimg">
                <img src="/img/tutorinfo.png" className="info" />
              </div> */}
              <div className="flexcenter rooms">
                { this.state.courses.map((course, index) => (
                  <ActiveClass key={index} index={index} course={course} isTutor={this.state.isTutor} />
                ))}
              </div>
            </div>
           }
          </div>
        </div>
      </div>
    );
  }
}

export default RoomPreviewComponent;
