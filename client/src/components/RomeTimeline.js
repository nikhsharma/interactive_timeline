import React, {Component} from 'react';
import Timeline from './Timeline';
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
    fetch(url).then(res => res.json()).then(data => this.setState({data: data['0'].data}))
    // this.pageScroll();
    setInterval(this.scrollDiv,50)
    const button = document.querySelector('.move-button')
    button.addEventListener('click', () => {document.querySelector('.timeline').scrollLeft = 4700})
  }

  scrollDiv(){
    const timeline = document.querySelector('.timeline');
      if (!timeline) return null;
      if(timeline.scrollLeft<(timeline.scrollWidth-timeline.offsetWidth)){
        timeline.scrollLeft=timeline.scrollLeft+1
        // console.log(timeline.scrollLeft);
            }
      else {document.querySelector('.timeline').scrollTop=0;}
    }


  render() {

    if (!this.state.data) return null;
    const events = this.state.data.map( event => (
        <div key={event.data_date} className="event">
            <div className="date">
              {event.data_date}
            </div>
            <dvi className='point'></dvi>
            <div className="content ">
              {event.content}
            </div>
        </div>
    ))
    return  (
      <div className='timeline-content'>
        <Timeline events={events}/>
      </div>
    );
  }
}
