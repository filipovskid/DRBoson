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
      isAuthenticated: false
    }
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  onUserLogin = (successful) => {
    successful ? this.setState({ isAuthenticated: true })
      : this.setState({ isAuthenticated: false });
  }

  checkLoginStatus = () => {
    AuthenticationService.checkLoginStatus()
      .then(response => {
        this.setState({ isAuthenticated: true });
      }).catch(error => {
        this.setState({ isAuthenticated: false });
      });
  }

  render() {
    const router = (
      <Router>
        <Header />
        <div className='container-xl'>
          <Route exact path='/join'>
            <Registration />
          </Route>
          <Route exact path='/login'>
            <Login onUserLogin={this.onUserLogin} />
          </Route>
          {/* <ProtectedRoute exact authenticated={this.state.isAuthenticated} path="/">  </ProtectedRoute> */}
          <Route>
            <HomePage />
          </Route>
        </div>
      </Router>
    );

    return router;
  }
}

export default App;
