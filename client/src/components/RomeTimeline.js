import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import FavouriteButton from './FavouriteButton';
import Timeline from './Timeline';
import Favourites from './Favourites';
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
    this.timeHop = this.timeHop.bind(this)
    this.handleFavClick = this.handleFavClick.bind(this);
    this.removeFavourite = this.removeFavourite.bind(this);
  }

  componentDidMount() {
    const url = "/api/history";
    fetch(url).then(res => res.json()).then(data => {
      this.setState({ data: data})
    })
    setInterval(this.scrollDiv,30)
    if (!localStorage.getItem('saved')) return null;
    this.setState({favourites: JSON.parse(localStorage.getItem('saved'))})
  }

  handleFavClick(currentEvent) {
    const newFavs = this.state.favourites;
    newFavs.push(currentEvent);
    this.setState({favourites: newFavs})
    this.forceUpdate();
    localStorage.setItem('saved', JSON.stringify(this.state.favourites));
  }

  removeFavourite(fave) {
    this.state.favourites.forEach((favourite, index) => {
      let newFavs = this.state.favourites
      if (favourite.content === fave.content) {
        newFavs.splice(index, 1)
      }
      this.setState({favourites: newFavs})
      localStorage.setItem('saved', JSON.stringify(newFavs))
    })
    // console.log('asfas');
    // for (let i = 0; i < this.state.favourites.length; i++) {
    //   if (this.state.favourites[i] === fave) {
    //     this.state.favourites.slice(i, 1);
    //
    //   }
    // }
  }

  scrollDiv(){
    const timeline = document.querySelector('.timeline');
    if (timeline) {
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

      } else {
        document.querySelector('.timeline').scrollLeft=0;
      }
    }
  }


    timeHop(position) {
      if (!document.querySelector('.timeline')) return null;
      document.querySelector('.timeline').scrollLeft=position;
    }



  render() {
    let events = [{
      data_date: 'sdf',
      content: 'sdfasdf'
    }]
    if (this.state.data) {
      events = this.state.data.map( event => (
        <div key={event.data_date} id={event.data_date} className="event">
          <div className="date">
            {event.data_date}
          </div>
          <div className='point'></div>
          <div className="content ">
            {event.content}
            <FavouriteButton eventToSave={event} handleClick={this.handleFavClick} removeFavourite={this.removeFavourite}/>
          </div>
        </div>
      ))

      return  (
        <div className='timeline-content'>
          <div className='timeline-bg'></div>
          <tr className="jump-buttons">
            <th>
              <Button onClick={() => this.timeHop(1000)}>Foundation of Rome</Button>
            </th>
            <th>
              <Button onClick={() => this.timeHop(2000)}>The Laws of the Twelve Tables 449 BCE</Button>
            </th>
            <th>
              <Button onClick={() => this.timeHop(3000)}>Hannibal invades Italy 218 BCE</Button>
            </th>
            <th>
              <Button onClick={() => this.timeHop(4000)}>Julius Caesar was assassinated 44 BCE</Button>
            </th>
          </tr>
          <tr>
            <th>
              <Button onClick={() => this.timeHop(5000)}>Roman Empire began 27 BCE</Button>
            </th>
            <th>
              <Button onClick={() => this.timeHop(5000)}>Augustus ended pontifex maximus 12 BCE</Button>
            </th>
            <th>
              <Button onClick={() => this.timeHop(5000)}>306  Constantine becomes Emperor in 306 AD</Button>
            </th>
            <th>
              <Button onClick={() => this.timeHop(5000)}>380  Conversion to Christianity</Button>
            </th>
          </tr>
          <tr>
            <th>
              <Button onClick={() => this.timeHop(5000)}>395  Rome splits</Button>
            </th>
            <th>
              <Button onClick={() => this.timeHop(5000)}>410  The Visigoths sack Rome</Button>
            </th>
            <th>
              <Button onClick={() => this.timeHop(5000)}>476  End of the Western Roman Empire and the fall of Ancient Rome</Button>
            </th>
            <th>
              <Button onClick={() => this.timeHop(50000)}>1453  The Byzantine Empire ends</Button>
            </th>
          </tr>
          <Timeline events={events}/>
          <h2>Favourite Events</h2>
          <Favourites favs={this.state.favourites} removeFavourite={this.removeFavourite} />

        </div>
      );
    }
  }
}
