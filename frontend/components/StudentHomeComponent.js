import React from 'react';
import GetHelpComponent from './GetHelpComponent';
// class component
const StudentHomeComponent = (props) => {
  const studentUsername = "Student"+Math.round(Math.random()*1000);
  localStorage.setItem('username', studentUsername);
  console.log('props in student home:', props);
  return (
    <div>
      <div style={{marginBottom: 100}}>
        <GetHelpComponent socket={props.socket}/>
      </div>
    </div>
  );
};


export default StudentHomeComponent;
