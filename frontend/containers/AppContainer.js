import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { Link, Route } from 'react-router-dom';

import Title from '../components/Title';
// import TutorHomeComponent from '../components/TutorHomeComponent';
// import TutorRegisterComponent from '../components/TutorRegisterComponent';
// import StudentHomeComponent from '../components/StudentHomeComponent';
// import HomeComponent from '../components/HomeComponent';
import Routes from '../routes';
import HomeHeaderComponent from '../Components/Header';

const AppContainer = (props) => {
  return (
    <div>
      {/* <Link to="/"> */}
      <HomeHeaderComponent/>
    {/* </Link> */}
    { Routes }
  </div>
  );
}

export default AppContainer;
