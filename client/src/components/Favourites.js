import React, {Component} from 'react';
import './Favourites.css'
import RemoveFavouriteButton from '../components/RemoveFavouriteButton';

export default class Favourites extends Component {

  handEnterButton() {
    var input = document.getElementById("submitNote");
    input.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("submitBtn").click();
      }
    });
  }


  render() {
    let favs;
    if (this.props.favs) {
      favs = this.props.favs.map( fav => (

        <div className='saved'>
          <RemoveFavouriteButton removeFavourite={this.props.removeFavourite} currentEvent={fav} />
          <p>{fav.data_date}</p>
          <p>{fav.content}</p>
          <div>
            <form action="">
              <input id="submitNote" type="text"/>
              <input id="submitBtn" type="submit" value="Submit" onClick={() => console.log("Testing the click")}/>
            </form>
          </div>
        </div>
      ))}


      return (
        <div className='favouritessection'>
          <div className='faveh2'>
            <h2>Favourite Events</h2>
            <div className='favourites'>
              {favs}
            </div>
          </div>

        </div>

      )
    }
  }
