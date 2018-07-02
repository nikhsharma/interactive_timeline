import React, {Component} from 'react';
import './Favourites.css'
// import FavouriteButton from '../components/FavouriteButton';

export default class Favourites extends Component {


  render() {
    let favs;
    console.log('before');
    console.log(this.props.favs);
    if (this.props.favs) {
      favs = this.props.favs.map( fav => (
        <div className='saved'>
          <p>{fav.data_date}</p>
          <p>{fav.content}</p>
        </div>
    ))}
    console.log('after');


    return (
      <div className='favourites'>
        {favs}
      </div>
    )
  }
}
