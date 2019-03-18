import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory";
import { Signin, NewQuestion, Leadership, Poll, Home, NotFound } from './pages'
import { Header } from './components';
import * as actions from './actions';
import './App.css';

const history = createBrowserHistory()

class App extends Component {

  componentDidMount(){
    this.props.dispatch(actions.fetchQuestions());
    this.props.dispatch(actions.fetchUsers());
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Router history={history}>
        <div className="App">
          <Header/>
          <div className="page-container">
            <div>
              <Switch>
                <Route exact path="/" render={() => isLoggedIn ? <Home/> : <Signin />} />
                <Route exact path="/home" render={() => isLoggedIn ? <Home/> : <Signin />} />
                <Route exact path="/add" render={() => isLoggedIn ? <NewQuestion/> : <Signin />} />
                <Route exact path="/leaderboard" render={() => isLoggedIn ? <Leadership/> : <Signin />} />
                <Route exact path="/question/:id" render={() => isLoggedIn ? <Poll/> : <Signin />} />
                <Route exact path="/404" component={NotFound} />
                <Redirect to="/404" />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user_id ? true : false
})

export default connect(mapStateToProps)(App);
