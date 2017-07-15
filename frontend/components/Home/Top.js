import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class HomeTopComponent extends React.Component {
  constructor() {
    super();
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('inside click')
    axios.post('/api/initialize', {
      role: "STUDENT",
      school: "",
      preferences: []
    })
    .then((response) => {
      console.log('student post', response)
    })
    .catch((err) => {
      console.log('student post err', err)
    })
    axios.get('api/initialize')
    .then((response) => {
      console.log(response)
    })
  }

  render(){
    return (
      <div className = "hometopbox">
        <span className = "h1">
          I am a...
        </span>
        <div className = "homeboxbuttons">
          <Link to='/student/home' onClick={() => {this.handleClick()}}>
          <button className = "homebutton pink" >
            <span className = "h2">
              Student
            </span>
          </button>
        </Link>

        <Link to="/tutor/register">
          <button className = "homebutton pink">
            <span className = "h2">Tutor</span>
          </button>
        </Link>
      </div>
      <img src="/img/desk.png" className = "desk"/>
    </div>
    );
  }
};

export default HomeTopComponent;
