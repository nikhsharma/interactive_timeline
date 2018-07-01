import React from 'react';

const Timeline = (props) => {
  return (
    <div className='timeline'>
      <div className='hline'></div>
      {props.events}
      <button className='move-button'>Move timeline</button>
    </div>
  )
}

export default Timeline;
