import React, {Component} from 'react';
import './FavouriteButton.css';

export default class FavouriteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: []
    }
  }

  componentDidMount() {
    console.log("Favourite Button mounted");
  }

  handleFavClick(event) {
    // event.preventDefault();
    console.log("Favourite Button was clicked");
  }

  render() {
    return (
      <div className="save-button">
        <button onClick={this.handleFavClick} type="submit">
          <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/star-512.png" width="19" height="15" alt="Save" />
        </button>
      </div>
    )
  }
}
