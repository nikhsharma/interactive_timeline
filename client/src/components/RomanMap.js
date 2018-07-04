import React, {Component} from 'react';
import "./RomanMap.css";

export default class RomanMap extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.mapTimeLapse = this.mapTimeLapse.bind(this)
  }

  componentDidMount() {
    setInterval(this.mapTimeLapse, 30);
  }

  mapTimeLapse() {
    const timeline = document.querySelector(".timeline");
    const img = document.querySelector(".map-of-rome")

    if (timeline) {
        if (timeline.scrollLeft < 25925.453125 ) {
          img.src = "/Images/RE-338b.gif";
        } else if( 25925.453125 < timeline.scrollLeft && timeline.scrollLeft < 25780) {
          img.src= "/Images/RE-279n.gif";
        } else if( 25780 < timeline.scrollLeft && timeline.scrollLeft < 32420 ) {
          img.src= "/Images/RE-214n.gif";
        } else if( 32420 < timeline.scrollLeft && timeline.scrollLeft < 46520 ) {
          img.src= "/Images/RE-86n.gif";
        } else if( 46520 < timeline.scrollLeft && timeline.scrollLeft < 58720 ) {
          img.src= "/Images/RE0009x.gif";
        } else if( 58720 < timeline.scrollLeft && timeline.scrollLeft < 63570 ) {
          img.src= "/Images/RE0116x.gif";
        } else if( 63570 < timeline.scrollLeft && timeline.scrollLeft < 82560 ) {
          img.src= "/Images/RE0269n.gif";
        } else if( 82560 < timeline.scrollLeft && timeline.scrollLeft < 91370 ) {
          img.src= "/Images/RE0336x.gif";
        } else if( 91370 < timeline.scrollLeft && timeline.scrollLeft < 99150 ) {
          img.src= "/Images/RE0485n.gif";
        } else if( 99150 < timeline.scrollLeft && timeline.scrollLeft < 100980 ) {
          img.src= "/Images/RE0564x.gif";
        } else if( 100980 < timeline.scrollLeft && timeline.scrollLeft < 102370 ) {
          img.src= "/Images/RE0623n.gif";
        } else if( 102370 < timeline.scrollLeft && timeline.scrollLeft < 102990 ) {
          img.src= "/Images/RE0754n.gif";
        } else if( 102990 < timeline.scrollLeft && timeline.scrollLeft < 103551.8125 ) {
          img.src= "/Images/RE0812x.gif";
        } else if( 103551.8125 < timeline.scrollLeft && timeline.scrollLeft < 103860 ) {
          img.src= "/Images/RE0925n.gif";
        } else if( 103860 < timeline.scrollLeft && timeline.scrollLeft < 104650 ) {
          img.src= "/Images/RE1040x.gif";
        } else if( 104650 < timeline.scrollLeft ) {
          img.src= "/Images/RE1181x.gif";
        }
      }
    }


  render() {
    return (
      <div >
        <img className="map-of-rome" src="" alt=""/>
      </div>
    )
  }
}
