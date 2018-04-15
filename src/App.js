import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './components/Login'
import Signup from './components/Signup'
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
        <div>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

connect(
  mapStateToProps,
  null
)(App)

export default App
