import React from 'react';
import { Link, Route } from 'react-router-dom';
// class component
const TutorRegisterComponent = (props) => {
  console.log('TUTOR REGISTER: ', props.socket);

  const grade = ["Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"]
  const subject = ["Math", "Physics", "Chemistry", "History", "Biology", "English"]

  return (
    <div className="registerbox">
      <span className = "h1">Register</span>
      <div className="flexcenter" style={{padding:'2vh'}}>
        <div style={{width:'5vw'}}><span className="h4">School:</span></div> <input className="tutorinput" type="text"/>
      </div>
      <div className="flexcenter" style={{padding:'2vh'}}>
        <div style={{width:'5vw'}}><span className="h4">Major:</span></div> <input className="tutorinput" type="text"/>
      </div>
      <div className="flexcenter" style={{padding:'2vh'}}>
        <div style={{width:'5vw'}}><span className="h4">Year:</span></div> <input className="tutorinput" type="text"/>
      </div>

      <div className="flexcenter" style={{marginTop:'2vh'}}>
        <div style={{paddingLeft:'4vw'}}>
          {grade.map((grade) =>
            <div>
              <input type="checkbox" id={grade} name="interest" value={grade}/>
              <label className="h4" style={{paddingLeft:'2vw'}} for="coding">{grade}</label>
            </div>
          )}
        </div>
        <div style={{paddingLeft:'10vw'}}>
          {subject.map((subject) =>
            <div>
              <input type="checkbox" id={subject} name="interest" value={subject}/>
              <label className="h4" style={{paddingLeft:'2vw'}} for="coding">{subject}</label>
            </div>
          )}
        </div>
      </div>

      <button className="loginbutton pink" type="submit">
        <Link className="h4" to="/tutor/home">Sign me up</Link>
      </button>
    </div>
  );
};


export default TutorRegisterComponent;
