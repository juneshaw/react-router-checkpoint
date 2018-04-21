import React from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { connect } from 'react-redux'

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isLoggedIn: false
    }
  }
  //
  // state = {
  //   isOpen: false
  // }
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
            {!this.props.isLoggedIn ?
              (<Nav className="ml-auto" navbar>
                <NavItem >
                  <NavLink tag={Link} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signup">Signup</NavLink>
                </NavItem>
              </Nav>
              ) : null
            }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, null)(TopNav)
