import React, {Component} from 'react';
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
    this.savedNote = this.savedNote.bind(this);
  }

  componentDidMount() {
    const url = "/api/history";
    fetch(url).then(res => res.json()).then(data => {
      this.setState({ data: data})
    })
    setInterval(this.scrollDiv,40)
    if (!localStorage.getItem('saved')) return null;
    this.setState({favourites: JSON.parse(localStorage.getItem('saved'))})
  }

  handleFavClick(currentEvent) {
    const newFavs = this.state.favourites;
    newFavs.splice(0, 0, currentEvent);
    this.setState({favourites: newFavs})
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
  }

  savedNote(currentEvent, note) {
    if(!this.state.favourites) return null;

    const newEvent = {
      _id: currentEvent["_id"],
      data_date: currentEvent.data_date,
      content: currentEvent.content,
      note: note
    }

    const newFavourites = this.state.favourites.map(favourite =>{
      return favourite["_id"] === newEvent["_id"] ? newEvent : favourite
    });
      this.setState({favourites: newFavourites})
      localStorage.setItem("saved", JSON.stringify(newFavourites));
  }

scrollDiv(){
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const background = document.querySelector('.timeline-bg');
    if(timeline.scrollLeft<(timeline.scrollWidth-timeline.offsetWidth)){
      timeline.scrollLeft=timeline.scrollLeft+this.state.scrollSpeed
      if (timeline.scrollLeft < 20000) {
        background.style.backgroundImage = 'url(/Images/Cole_Thomas_The_Course_of_Empire_The_Arcadian_or_Pastoral_State_1836.jpg)'
      } else if (20000 < timeline.scrollLeft && timeline.scrollLeft < 30000) {
        background.style.backgroundImage = "url(/Images/Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg)";
      } else if (50000 < timeline.scrollLeft && timeline.scrollLeft < 80000) {
        background.style.backgroundImage = "url(/Images/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg)";
      } else if (80000 < timeline.scrollLeft) {
        background.style.backgroundImage = "url(/Images/Cole_Thomas_The_Course_of_Empire_Desolation_1836.jpg)";
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
        <div key={event['_id']} id={event.data_date} className="event">
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
          <Timeline events={events}/>
          <Favourites favs={this.state.favourites} removeFavourite={this.removeFavourite} savedNote={this.savedNote}/>
          {/* <Footer /> */}
        </div>
      );
    }
  }
}
