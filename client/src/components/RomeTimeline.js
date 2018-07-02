import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import FavouriteButton from './FavouriteButton';
import Timeline from './Timeline';
// import Favourites from './Favourites';
import './RomanTimeline.css'

export default class RomeTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      scrollSpeed: 1,
      favourites: []
    }
    this.scrollDiv = this.scrollDiv.bind(this)
    this.handleFavClick = this.handleFavClick.bind(this);
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

  handleFavClick(currentEvent) {
    const newFavs = this.state.favourites;
    newFavs.push(currentEvent);
    this.setState({favourites: newFavs})
    console.log(this.state.favourites);
  }

  scrollDiv(){
    const timeline = document.querySelector('.timeline');
    if (!timeline) return null;
    if(timeline.scrollLeft<(timeline.scrollWidth-timeline.offsetWidth)){
      timeline.scrollLeft=timeline.scrollLeft+this.state.scrollSpeed
      if (timeline.scrollLeft < 1950) {
        document.querySelector('.timeline-bg').style.filter = ''
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg)'
      } else if (1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
        document.querySelector('.timeline-bg').style.filter = 'blur(10px)'
      } else if (2050 < timeline.scrollLeft && timeline.scrollLeft < 3950) {
        document.querySelector('.timeline-bg').style.filter = ''
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://thevelvetrocket.files.wordpress.com/2010/04/thomas-cole-the-course-of-empire-the-consummation.jpg)'
      } else if (3950 < timeline.scrollLeft && timeline.scrollLeft < 4050) {
        document.querySelector('.timeline-bg').style.filter = 'blur(10px)'
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://thevelvetrocket.files.wordpress.com/2010/04/thomas-cole-the-course-of-empire-the-consummation.jpg)'
      } else if (4050 < timeline.scrollLeft && timeline.scrollLeft < 8000) {
        document.querySelector('.timeline-bg').style.filter = ''
        document.querySelector('.timeline-bg').style.backgroundImage = 'url(https://www.allartclassic.com/img/Cole_COT025.jpg)'
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
          <FavouriteButton eventToSave={event} handleClick={this.handleFavClick}/>
        </div>
      </div>
    ))

      return  (
        <div className='timeline-content'>
          <div className='timeline-bg'></div>
          <Button bsClass='move-button1'>Move timeline 1</Button>
          <Timeline events={events}/>
          {/* <Favourites favs={this.state.favourites}/> */}
        </div>
      );
    }
  }
