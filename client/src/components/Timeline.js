import React from 'react';
import RomanHistory from "./RomanHistory";

const Timeline = (props) => {
  return (
    <div>
      <div className='timeline'>
        <div className='hline'></div>
        {props.events}
      </div>
      <div className="historical_outline">
        <RomanHistory/>
      </div>
    </div>
  )
}

export default Timeline;
