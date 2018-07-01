import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import './RomanTimeline.css'

export default class RomeTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.scrollDiv = this.scrollDiv.bind(this)
  }

  componentDidMount() {
    const url = '/api/history'
    fetch(url).then(res => res.json()).then(data => this.setState({ data: data['0'].databaseEntries}))
    // this.pageScroll();
    console.log("hello")
    setInterval(this.scrollDiv,50)
  }

  scrollDiv(){
    if (!document.querySelector('.timeline')) return null;

    if(document.querySelector('.timeline').scrollTop<(document.querySelector('.timeline').scrollHeight-document.querySelector('.timeline').offsetHeight)){-1
      document.querySelector('.timeline').scrollTop=document.querySelector('.timeline').scrollTop+1
          }
    else {document.querySelector('.timeline').scrollTop=0;}
  }

  render() {
    if (!this.state.data) return null;
    const events = this.state.data.map( event => (
      <div className="event">
        <li  key={event.data_date}>
          <div className="date">
            {event.data_date}
            </div>
        <span className="point"></span>
        <div className="content ">
          {event.content}
        </div>
        </li>
      </div>
    ))
    return  (
      <div className='timeline'>
          {events}
      </div>
    );
  }
}
