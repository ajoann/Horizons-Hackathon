import React from 'react';
import RoomListComponent from './RoomListComponent';
import GetHelpComponent from './GetHelpComponent';

// class component
const TutorHomeComponent = (props) => {
  console.log('TUTOR HOME: ', props.socket);

  return (
    <div>
      <div className="infoimg">
        <img src="/img/tutorinfo.png" className="info"/>
      </div>
      <RoomListComponent socket={props.socket} />
    </div>
  );
};


export default TutorHomeComponent;
