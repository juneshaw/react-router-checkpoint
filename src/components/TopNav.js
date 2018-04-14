import React from 'react'
import { Link, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Example extends React.Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">ProfileHub</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/login">Login</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/signup">Signup</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route exact path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </div>
    );
  }
}
