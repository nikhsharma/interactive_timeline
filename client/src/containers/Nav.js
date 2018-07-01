import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import '../style/Nav.css';


export default class NavBar extends Component {
  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Interactive Timeline</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/rome">
          The History of Rome
        </NavItem>
      </Nav>
    </Navbar>
  )
}
}
