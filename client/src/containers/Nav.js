import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';


export default class Nav extends Component {
  render() {
    return(
      <div className='navbar'>
        <h1 className='title'>Interactive Timeline</h1>
        <ul className='navbar-ul'>
          <li className='navbar-li'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navbar-li'>
            <Link to='/rome'>Roman History</Link>
          </li>
          <li className='navbar-li'>
            <Link to='/bookmarks'>Bookmarks</Link>
          </li>
        </ul>
      </div>
    )
  }
}
