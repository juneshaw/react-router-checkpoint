import React from 'react'
import { connect } from 'react-redux'
import Login from './components/Login'
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
        {this.state.isLoggedIn ? null : (<Login/>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(
  mapStateToProps,
  null
)(App)
