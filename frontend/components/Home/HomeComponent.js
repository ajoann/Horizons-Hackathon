import PropTypes from 'prop-types';
import React from 'react';
import HomeTopComponent from './Top';
import HomeBottomComponent from '../Login/SplashBottom';

const HomeComponent = () => {
    return (
        <div>
            <HomeTopComponent/>
            <HomeBottomComponent/>
        </div>
    );
};

export default HomeComponent;
