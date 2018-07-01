import React, {Component} from 'react';
import '../style/Header.css'
import {Jumbotron} from 'react-bootstrap';

export default class Header extends Component {

  render() {
    return(
      <Jumbotron >
          <h2>Some heading text</h2>
    </Jumbotron>

    )
  }
}
