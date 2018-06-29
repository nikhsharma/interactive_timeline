import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Nav extends Component {
  render() {
    return(
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/rome'>Romean History</Link>
        </li>
      </ul>
    )
  }
}
