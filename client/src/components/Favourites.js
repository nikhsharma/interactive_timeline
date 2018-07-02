import React, {Component} from 'react';
import './Favourites.css'
import RemoveFavouriteButton from '../components/RemoveFavouriteButton';

export default class Favourites extends Component {


  render() {
    let favs;
    if (this.props.favs) {
      favs = this.props.favs.map( fav => (
        <div className='saved'>
          <RemoveFavouriteButton removeFavourite={this.props.removeFavourite} currentEvent={fav} />
          <p>{fav.data_date}</p>
          <p>{fav.content}</p>
        </div>
    ))}


    return (
      <div className='favourites'>
        {favs}
      </div>
    )
  }
}
