import React, {Component} from 'react';
// import Nav from './Nav';
import Header from './Header';
import Categories from './Categories';
// import Footer from './Footer';
import '../style/Home.css'

export default class Home extends Component {

  render() {
    return(
      <div className='home-content'>
        <Header />
        <Categories />
      </div>
    )
  }
}
