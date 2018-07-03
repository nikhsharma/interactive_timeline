import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import RomanHistory from "./RomanHistory";

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
    return (
      <div>
        <div className='timeline'>
          <div className='hline'></div>
          {this.props.events}
        </div>

        <tr className="jump-buttons">
          <th>
            <Button onClick={() => this.timeHop(1000)}>
              Foundation of Rome
          </Button>
          </th>
          <th>
            <Button onClick={() => this.timeHop(2000)}>
              The Laws of the Twelve Tables 449 BCE
          </Button>
          </th>
          <th>
            <Button onClick={() => this.timeHop(3000)}>
              Hannibal invades Italy 218 BCE
          </Button>
          </th>
          <th>
            <Button onClick={() => this.timeHop(4000)}>
              Julius Caesar was assassinated 44 BCE
          </Button>
          </th>
        </tr>
        <tr>
          <th>
            <Button onClick={() => this.timeHop(5000)}>
              Roman Empire began 27 BCE
          </Button>
          </th>
          <th>
            <Button onClick={() => this.timeHop(5000)}>
              Augustus ended pontifex maximus 12 BCE
          </Button>
          </th>
          <th>
            <Button onClick={() => this.timeHop(5000)}>
              306 Constantine becomes Emperor in 306 AD
          </Button>
          </th>
          <th>
            <Button onClick={() => this.timeHop(5000)}>
              380 Conversion to Christianity
          </Button>
          </th>
          <th>
            <Button onClick={() => this.timeHop(5000)}>
              395 Rome splits
          </Button>
          </th>
          <th>
            <Button onClick={() => this.timeHop(5000)}>
              410 The Visigoths sack Rome
          </Button>
          </th>
          <th>
            <Button onClick={() => this.timeHop(5000)}>
              476 End of the Western Roman Empire and the fall of
              Ancient Rome
          </Button>
          </th>
          <th>
            <Button onClick={() => this.timeHop(50000)}>
              1453 The Byzantine Empire ends
          </Button>
          </th>
        </tr>
        <div className="historical_outline">
          <RomanHistory />
        </div>
      </div>
    )
  }
}