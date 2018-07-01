import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Timeline from './Timeline';
import './RomanTimeline.css'

export default class RomeTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      scrollSpeed: 1
    }
    this.scrollDiv = this.scrollDiv.bind(this)
  }

  componentDidMount() {
    const url = '/api/history'
    fetch(url).then(res => res.json()).then(data => this.setState({data: data['0'].data}))
    setInterval(() => this.scrollDiv(),20)
    const button = document.querySelector('.move-button1')
    button.addEventListener('click', () => {
      document.querySelector('.timeline').scrollLeft=1000
    })
  }

  scrollDiv(){
    const timeline = document.querySelector('.timeline');
      if (!timeline) return null;
      if(timeline.scrollLeft<(timeline.scrollWidth-timeline.offsetWidth)){
        timeline.scrollLeft=timeline.scrollLeft+this.state.scrollSpeed
        // console.log(timeline.scrollLeft);
            }
      else {document.querySelector('.timeline').scrollLeft=0;}
    }


  render() {

    if (!this.state.data) return null;
    const events = this.state.data.map( event => (
        <div key={event.data_date} id={event.data_date} className="event">
            <div className="date">
              {event.data_date}
            </div>
            <div className='point'></div>
            <div className="content ">
              {event.content}
            </div>
        </div>
    ))
    return  (
      <div className='timeline-content'>
        <Button bsClass='move-button1'>Move timeline 1</Button>
        <Timeline events={events}/>
      </div>
    );
  }
}
