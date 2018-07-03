import React from 'react';
import './RemoveFavouriteButton.css'

const RemoveFavouriteButton = (props) => {
    return (
    <button className='rmbutton' onClick={() => props.removeFavourite(props.currentEvent)}>X</button>
  )
}

export default RemoveFavouriteButton;
