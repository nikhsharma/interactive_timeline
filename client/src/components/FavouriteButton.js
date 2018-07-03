import React, {Component} from 'react';
import './FavouriteButton.css';

export default class FavouriteButton extends Component {

  render() {
    return (
      <div className="save-button">
        <button onClick={() => this.props.handleClick(this.props.eventToSave)} type="submit">
          <img src="http://www.iconhot.com/icon/png/wp-woothemes-ultimate/256/star-56.png" width="19" height="15" alt="Save" />
        </button>
      </div>
    )
  }
}
