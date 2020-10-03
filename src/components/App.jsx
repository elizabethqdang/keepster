import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form';
import KeepsterHome from './keepster/keepster_home';
// import logo from './logo.svg';
// import '../App.css'
// import '../index.css'

const App = () => {
  return (
    <div className="App">
			<Route exact path="/home" component={KeepsterHome} />
			<AuthRoute exact path="/login" component={LoginForm} />
			<AuthRoute exact path="/signup" component={SignupForm} />

    </div>
  );
}

export default App;
