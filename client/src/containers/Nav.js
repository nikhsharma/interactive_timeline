import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Collapse} from 'react-bootstrap';
import '../style/Nav.css';


export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  componentDidUpdate() {
    const menu = document.querySelector('#menu');
    menu.addEventListener('click', () => {
      const bg = document.querySelector('.home-bg');
      if (!this.state.open) {
        bg.style.filter = 'blur(5px)';
        menu.style.transform = 'rotate(90deg)';
      } else {
        bg.style.filter = '';
        menu.style.transform = 'rotate(0deg)';
      }
    })
  }

  render() {
    return(
      <div>
      <div className='full' onClick={() => this.setState({ open: !this.state.open })}></div>
      <div id='nav'>
            <img id='menu' src="/Images/menu-icon-white.jpg" alt="menu button" onClick={() => this.setState({ open: !this.state.open })}/>
        <Collapse in={this.state.open}>
          <div className='collapse-content'>
            <Link className='menulink' onClick={() => this.setState({ open: !this.state.open })} to='/rome'>The History of Rome</Link>
          </div>
        </Collapse>
      </div>
      </div>
    )
  }
}
