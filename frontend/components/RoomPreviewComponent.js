import React from 'react';
import { Link } from 'react-router-dom';
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

    render() {
      return (
            <div className="flexcenter rooms">

              {this.state.courses.map((course, index) => (
                <button key={index} className="flexcenter roomcontainer yellow">
                  <img className="apple" src="/img/apple.png" style={{height:'100px'}}/>
                  <div className='flexcolumn'>
                    <span className="h4"> Grade {course.Grade} </span>
                    <span className="h4"> {course.Course} </span>
                  </div>
                </button>
              ))}
            </div>
          );
        }


//   render() {
//     console.log('courses: ',this.state.courses);
//     // console.log('username: ',this.state.username, this.state.username.indexOf('Tutor'));
//     return(
//       <div>
//         <div className={'flexbox'}>
//         { this.state.courses.length < 1 ?
// >>>>>>> feature/chatroom
//
//           <div className="h4 text-center"> No classes currently active.
//             {this.state.username.indexOf('Tutor') === 0 ?
//               <div className="h4 text-center"> Come back another time when students are online!</div>
//               :
//               <div className="h4 text-center"> Add a class by selecting a Grade and Subject!</div>
//             }
//           </div>
//
//
//           :
//           this.state.courses.map((course, index) => {
//             const linkTo = "/chatroom/"+course.Grade+"/"+course.Subject;
//             console.log('course: ',course);
//             return (
//               <button key={index} className={'classbutton'}>
//                 {/* GRADE: */}
//                 <Link style={{flex:1}} to={linkTo}>
//                   <div>Grade: {course.Grade} </div>
//                   {/* SUBJECT: */}
//                   <div> {course.Subject}</div>
//                 </Link>
//               </button>
//             )
//         })}
//         </div>
//       </div>
//     );
//   }
}

export default RoomPreviewComponent;
