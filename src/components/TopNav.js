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
import { bindActionCreators } from 'redux'
import { userLogout } from '../actions/auth.actions'

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
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
            {!this.props.isLoggedIn ?
              (<Nav className="ml-auto" navbar>
                <NavItem >
                  <NavLink tag={Link} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signup">Signup</NavLink>
                </NavItem>
              </Nav>
              ) :
              (<Nav className="ml-auto" navbar>
                <NavItem >
                  <a href="/" onClick={this.props.userLogout} className = "nav-link">Logout</a>
                </NavItem>
              </Nav>
              )
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


const mapDispatchToProps = dispatch =>
bindActionCreators({
  userLogout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
