import React, {Component} from 'react';
import FavouriteButton from './FavouriteButton';

export default class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: []
    }
    this.handleFavClick = this.handleFavClick.bind(this);
  }

  componentDidMount() {
    console.log("Favourites mounted");
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

  handleFavClick(historicalEvent) {
    historicalEvent.preventDefault();
    console.log("Favourite Button was clicked");
    this.setState(() => {
      favourites: this.state.favourites.push("Testing");
    });
    console.log(this.state.favourites);
  }

  render() {
    return (
      <FavouriteButton/>
    )
  }
}
