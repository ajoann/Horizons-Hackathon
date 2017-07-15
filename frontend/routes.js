import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TutorHomeComponent from './components/TutorHomeComponent';
import TutorRegisterComponent from './components/TutorRegisterComponent';
import StudentHomeComponent from './components/StudentHomeComponent';
import HomeComponent from './components/Home/HomeComponent';
import ChatRoom from './components/ChatRoom';
import Logout from './components/Logout';

const socket = io();

export default (
	<Switch>
    <Route exact path="/student/home" render={() => <StudentHomeComponent socket={socket}/>} />
    <Route exact path="/tutor/register" component={TutorRegisterComponent} />
    <Route exact path="/tutor/home" render={() => <TutorHomeComponent socket={socket}/>} />
		<Route path="/chatroom/:grade/:subject" render={({match}) => <ChatRoom socket={socket} match={match}/>} />
		<Route path="/logout" component={Logout} />
		<Route exact path="/" component={HomeComponent} />
	</Switch>
);
