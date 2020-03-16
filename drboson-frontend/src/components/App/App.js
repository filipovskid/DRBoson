import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
// import './App.css';
import '../../styles/main.css';
import Header from '../Header/header';
import Registration from '../Auth/Registration'
import Login from '../Auth/Login'
import AuthenticationService from '../../actions/auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import HomePage from '../Page/HomePage/homePage';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: null,
      userDetails: {}
    }
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  onUserLogin = (successful) => {
    this.checkLoginStatus();
  }

  checkLoginStatus = () => {
    AuthenticationService.checkLoginStatus()
      .then(response => {
        this.setState({
          isAuthenticated: true,
          userDetails: response.data
        });
      }).catch(error => {
        this.setState({
          isAuthenticated: false,
          userDetails: {}
        });
      });
  }

  render() {
    if (this.state.isAuthenticated == null) {
      return null;
    }

    return (
      <Router>
        <Header />
        <div className='container-xl'>
          <Route exact path='/join'>
            <Registration />
          </Route>
          <Route exact path='/login'>
            <Login onUserLogin={this.onUserLogin} />
          </Route>
          <ProtectedRoute exact path="/" isAuthenticated={this.state.isAuthenticated} component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
