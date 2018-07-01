import React from 'react';

const Timeline = (props) => {
  return (
    <div className='timeline'>
      <div className='hline'></div>
      {props.events}
    </div>
  )
}

export default Timeline;
