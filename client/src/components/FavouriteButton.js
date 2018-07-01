import React, {Component} from 'react';
import './FavouriteButton.css';

export default class FavouriteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: []
    }
    this.handleFavClick = this.handleFavClick.bind(this);
  }

  componentDidMount() {
    console.log("Favourite Button mounted");
    const button = document.querySelector('button');
    // console.log("Button", button);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE");
    console.log("Next state is: ", nextState);
    console.log("Next props is: ", nextProps);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE");
    console.log("Previous state is: ", prevState);
    console.log("Previous props is: ", prevProps);
  }

  handleFavClick(event) {
    event.preventDefault();
    console.log("Favourite Button was clicked");
    this.setState(() => {
      favourites: this.state.favourites.push("Testing");
    });
    console.log(this.state.favourites);
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
