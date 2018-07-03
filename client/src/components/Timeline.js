import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import RomanMap from './RomanMap';
import RomanHistory from './RomanHistory';


export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.timeHop = this.timeHop.bind(this);
  }

  timeHop(position) {
    if (!document.querySelector('.timeline')) return null;
    document.querySelector('.timeline').scrollLeft = position;
  }

  render() {
    return <div className='topsection'>
      <RomanHistory />
      <div className='timeline' id='timeline'>
        <div className='hline' />
        {this.props.events}
      </div>
      <div className='map-btns'>
        <RomanMap />
        <div className='buttons'>
          <button className='timebutton' className='timebutton' onClick={() => this.timeHop(0)}>
            Foundation of Rome
          </button>
          <button className='timebutton' onClick={() => this.timeHop(5958)}>
            The Laws of the Twelve Tables
          </button>
          <button className='timebutton' onClick={() => this.timeHop(32020)}>
            Hannibal invades Italy
          </button>
          <button className='timebutton' onClick={() => this.timeHop(53512)}>
            Julius Caesar was assassinated
          </button>
          <button className='timebutton' onClick={() => this.timeHop(54480)}>
            Roman Empire began
          </button>
          <button className='timebutton' onClick={() => this.timeHop(58500)}>
            Augustus ended pontifex maximus
          </button>
          <button className='timebutton' onClick={() => this.timeHop(88500)}>
            Constantine becomes Emperor
          </button>
          <button className='timebutton' onClick={() => this.timeHop(95120)}>
            Conversion to Christianity
          </button>
          <button className='timebutton' onClick={() => this.timeHop(95142.5)}>
            Rome splits
          </button>

          <button className='timebutton' onClick={() => this.timeHop(95701.25)}>
            The Visigoths sack Rome
          </button>


          <button className='timebutton' onClick={() => this.timeHop(98662.5)}>
            End of the Western Roman Empire and the fall of Ancient
            Rome
          </button>


          <button className='timebutton' onClick={() => this.timeHop(104363.75)}>
            The Byzantine Empire ends
          </button>

        </div>
      </div>
    </div>;
  }
}
