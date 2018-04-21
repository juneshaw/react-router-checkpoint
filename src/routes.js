import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Signup from './components/Signup'

const routes = (
    <Route exact path="/" component={App}>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/signup" component={Signup}/>
  </Route>
)

export default routes
