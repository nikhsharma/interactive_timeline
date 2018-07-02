import React, {Component} from 'react';
// import FavouriteButton from '../components/FavouriteButton';

export default class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: []
    }
  }

  componentDidMount() {
    this.setState({favourites: this.props.favourites})
  }

  render() {
    if (!this.state.favourites) return null;
    const favs = this.state.favourites.map( fav => (
      <p>save</p>
    ))
    return (
      <div className='favourites'>{favs}</div>
    )
  }
}
