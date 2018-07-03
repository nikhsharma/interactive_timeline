import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {Navbar, Nav, NavItem} from 'react-bootstrap';
import '../style/Nav.css';


export default class NavBar extends Component {
  render() {

    return(
      <div id='nav'>
        <img src="/Images/menu-icon-white.jpg" alt="menu button"/>
      </div>
  )
}
}
