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

  handleSaveNote(currentFav) {
    const savedNote = this.state.favourites;
    this.setState({favourites: savedNote})
    localStorage.setItem('saved', JSON.stringify(this.state.favourites));
  }


  render() {
    let favs;
    if (this.props.favs) {
      // const noteToSave = document.querySelector('#submitNote').value;
      favs = this.props.favs.map( fav => (

        <div className='saved'>
          <RemoveFavouriteButton removeFavourite={this.props.removeFavourite} currentEvent={fav} />
          <p>{fav.data_date}</p>
          <p>{fav.content}</p>
          <div>
              <input id="submitNote" type="text"/>
              <button id="submitBtn" type="submit" value="Save" onClick={() => this.props.savedNote(fav, document.querySelector('#submitNote').value)}/>
          </div>
          <p>Notes:</p>
          <p>{fav.note}</p>
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
