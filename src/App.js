import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './components/Login'
import Signup from './components/Signup'
import UserProfile from './components/UserProfile'
import TopNav from './components/TopNav'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false};
  }

  render() {
    return (
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/" render=
          {() => (this.state.isLoggedIn ?
            ({UserProfile}) :
            (<Redirect to="/login"/>))}
          />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/profile" component={UserProfile}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

connect(
  mapStateToProps, null
)(App)

export default App
