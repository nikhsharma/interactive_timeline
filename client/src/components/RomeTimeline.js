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
    this.timeHop = this.timeHop.bind(this)
  }

  componentDidMount() {
    const url = "/api/history";
    fetch(url).then(res => res.json()).then(data => {
      this.setState({ data: data})
    })
    setInterval(this.scrollDiv,30)
    const button = document.querySelector('.move-button2')
    // button.addEventListener('click', () => {
    //   document.querySelector('.timeline').scrollLeft=1000
    // })
  }

  scrollDiv(){
    const timeline = document.querySelector('.timeline');
    if (!timeline) return null;
    if(timeline.scrollLeft<(timeline.scrollWidth-timeline.offsetWidth)){
      timeline.scrollLeft=timeline.scrollLeft+this.state.scrollSpeed
      if (timeline.scrollLeft < 1950) {
        document.querySelector('.timeline-bg').style.filter = ''
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/8/8c/Cole_Thomas_The_Course_of_Empire_The_Arcadian_or_Pastoral_State_1836.jpg)'
      } else if (1950 < timeline.scrollLeft && timeline.scrollLeft < 3050) {
        document.querySelector('.timeline-bg').style.filter = 'blur(10px)'
      } else if (3050 < timeline.scrollLeft && timeline.scrollLeft < 4950) {
        document.querySelector('.timeline-bg').style.filter = 'blur(10px)'
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/1/1a/Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg)'
      } else if (4950 < timeline.scrollLeft && timeline.scrollLeft < 8000) {
        document.querySelector('.timeline-bg').style.filter = ''
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg)'
      } else if (8000 < timeline.scrollLeft) {
        document.querySelector('.timeline-bg').style.filter = ''
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/7/77/Cole_Thomas_The_Course_of_Empire_Desolation_1836.jpg)'
      }
    }
    else {document.querySelector('.timeline').scrollLeft=0;}
  }

  timeHop(position) {
    if (!document.querySelector('.timeline')) return null;
    document.querySelector('.timeline').scrollLeft=position;
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
        <div className='timeline-bg'></div>
        <Button onClick={() => this.timeHop(1000)}>Foundation of Rome</Button>
        <Button onClick={() => this.timeHop(2000)}>The Laws of the Twelve Tables 449 BCE</Button>
        <Button onClick={() => this.timeHop(3000)}>Hannibal invades Italy 218 BCE</Button>
        <Button onClick={() => this.timeHop(4000)}>Julius Caesar was assassinated 44 BCE</Button>
        <Button onClick={() => this.timeHop(5000)}>Roman Empire began 27 BCE</Button>
        <Button onClick={() => this.timeHop(5000)}>Augustus ended pontifex maximus 12 BCE</Button>
        <Button onClick={() => this.timeHop(5000)}>306	Constantine becomes Emperor in 306 AD</Button>
        <Button onClick={() => this.timeHop(5000)}>380	Conversion to Christianity</Button>
        <Button onClick={() => this.timeHop(5000)}>395	Rome splits</Button>
        <Button onClick={() => this.timeHop(5000)}>410	The Visigoths sack Rome</Button>
        <Button onClick={() => this.timeHop(5000)}>476	End of the Western Roman Empire and the fall of Ancient Rome</Button>
        <Button onClick={() => this.timeHop(50000)}>1453	The Byzantine Empire ends</Button>
        <Timeline events={events}/>
      </div>
    );
  }
}
