import React from 'react';
import { Link } from 'react-router-dom';

const ActiveClass = (props) => {
  const linkTo = "/chatroom/"+props.course.Grade+"/"+props.course.Subject;
  console.log(props.course);
  return (
    <Link key={props.index} style={{flex:1}} to={linkTo}>
      <button key={props.index} className={'flexcenter roomcontainer yellow'}>
        <div>
          <span className="h4 " style={{position: 'absolute', marginTop: '42px', marginLeft: '42px', zIndex: 50, color:'#fff0e2' }}>  {props.course.Count}</span>

          <img src="/img/apple.png" className="apple" style={{position: 'relative'}}/>
        </div>
        <div className="flexcolumn">
          <span className="h4" style={{width: "120px"}}>Grade: {props.course.Grade}  </span>
          <span className="h4">  {props.course.Subject}</span>
        </div>
      </button>
    </Link>
  )
}

export default ActiveClass;
