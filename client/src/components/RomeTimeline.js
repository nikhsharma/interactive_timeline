import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './RomanTimeline.css'

export default class RomeTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const url = '/api/history'
    fetch(url).then(res => res.json()).then(data => this.setState({data: data['0'].data}))

  }


  render() {
    if (!this.state.data) return null;
    const events = this.state.data.map( event => (
      <div>
        <li className="event" key={event.data_date}>
          <div className="date">
            {event.data_date}
            </div>
        <span class="point"></span>
        <div className="content">
          {event.content}
        </div>
        </li>
      </div>
    ))
    return  (
      <div className='timeline'>
        <ol>
          {events}
        </ol>
      </div>
    );
  }
}
