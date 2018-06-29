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
    // console.log(this.state.data);
    const events = this.state.data.map( event => (
      <p key={event.data_date}>{event.data_date + ' ' + event.content}</p>
    ))
    return  (
      <div className='timeline'>

    {events}
    </div>
    );
  }
}
