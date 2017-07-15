import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import HomeHeaderComponent from '../Header';
import HomeTopComponent from './Top';
import HomeBottomComponent from '../Home/Bottom';
import axios from 'axios'

class HomeComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      register: false,
      status: ''
    }
  }
  componentDidMount(){
    axios.get('/api/initialize')
    .then((response) => {
      console.log(response.data.registered, response.data.user.local.role)
      this.setState({
        register: response.data.registered,
        status: response.data.user.local.role
      })
      console.log('state', this.state)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    if(this.state.register && this.state.status === "STUDENT"){
      return <Redirect to="/student/home"/>
    }else if(this.state.register && this.state.status === "TUTOR"){
      return <Redirect to="/tutor/home"/>
    }
    return (
      <div>
        {/* <HomeHeaderComponent/> */}
        <HomeTopComponent/>
        <HomeBottomComponent/>
      </div>
    );
  }
};

export default HomeComponent;
