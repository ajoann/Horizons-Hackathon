import React from 'react';
import { Link } from 'react-router-dom';

const ActiveClass = (props) => {
  const linkTo = "/chatroom/"+props.course.Grade+"/"+props.course.Subject;
  return (
    <Link key={props.index} style={{flex:1}} to={linkTo}>
      <button key={props.index} className={'flexcenter roomcontainer yellow'}>
        <img src="/img/apple.png" className="apple" />
        <div className="flexcolumn">
          <span className="h4" style={{width: "120px"}}>Grade: {props.course.Grade}  </span>
          <span className="h4">  {props.course.Subject}</span>
        </div>
      </button>
    </Link>
  )
}

export default ActiveClass;
