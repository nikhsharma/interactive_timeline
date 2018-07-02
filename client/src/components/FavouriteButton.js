import React, {Component} from 'react';
// import './FavouriteButton.css';
import Favourites from './Favourites';

export default class FavouriteButton extends Component {

  componentDidMount() {

  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    return (
      <div className="save-button containter">
        <button onClick={() => this.props.handleClick(this.props.eventToSave)} type="submit">
        {/* <button onClick={() => console.log("Testing click")} type="submit"> */}
          <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/star-512.png" width="19" height="15" alt="Save" />
        </button>
      </div>
    )
  }
}
