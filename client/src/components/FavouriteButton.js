import React, {Component} from 'react';
import './FavouriteButton.css';

export default class FavouriteButton extends Component {

  render() {
    return (
      <div className="save-button">
        <button onClick={() => this.props.handleClick(this.props.eventToSave)} type="submit">
          <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/star-512.png" width="19" height="15" alt="Save" />
        </button>
      </div>
    )
  }
}
