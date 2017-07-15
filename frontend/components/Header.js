import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeaderComponent = () => {
    return (
      <div className = "header pink">
        <Link to="/">
          <img src="/img/tutorme.png" className = "logo"/>
        </Link>
      </div>
    );
};

export default HomeHeaderComponent;
