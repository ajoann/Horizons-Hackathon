import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'

class HomeHeaderComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className = "header pink">
        <Link to="/">
          <img src="/img/tutorme.png" className = "logo"/>
        </Link>
        <Link to="/logout" style={{position: 'absolute', marginLeft: '45%', zIndex: 100}}>
          <img src="/img/door.png" className = "logo" style={{height: '100px', width: '100px'}}/>
        </Link>
      </div>
    );
  }
};

export default HomeHeaderComponent;
