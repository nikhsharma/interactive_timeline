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
    const url = "/api/history";
    fetch(url).then(res => res.json()).then(data => {
      this.setState({ data: data})
    })
    setInterval(this.scrollDiv,30)
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
      if (timeline.scrollLeft < 1950) {
        document.querySelector('.timeline-bg').style.filter = ''
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/8/8c/Cole_Thomas_The_Course_of_Empire_The_Arcadian_or_Pastoral_State_1836.jpg)'
      } else if (1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
        document.querySelector('.timeline-bg').style.filter = 'blur(10px)'
      } else if (2050 < timeline.scrollLeft && timeline.scrollLeft < 3950) {
        document.querySelector('.timeline-bg').style.filter = ''
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/1/1a/Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg)'
      } else if (3950 < timeline.scrollLeft && timeline.scrollLeft < 4050) {
        document.querySelector('.timeline-bg').style.filter = 'blur(10px)'
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg)'
      } else if (4050 < timeline.scrollLeft && timeline.scrollLeft < 8000) {
        document.querySelector('.timeline-bg').style.filter = ''
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/7/77/Cole_Thomas_The_Course_of_Empire_Desolation_1836.jpg)'
      }
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

    console.log(document.querySelector('.content'));
    // document.querySelector('.event').addEventListener('mouseOver', () => this.setState({scrollSpeed: 0}))
    // document.querySelector('.event').addEventListener('mouseOut', () => this.setState({scrollSpeed: 1}))


      return  (
        <div className='timeline-content'>
          <div className='timeline-bg'></div>
          <Button bsClass='move-button1'>Move timeline 1</Button>
          <Timeline events={events}/>
        </div>
      );
    }
  }
