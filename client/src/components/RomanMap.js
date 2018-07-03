import React, {Component} from 'react';
import "./RomanMap.css";

export default class RomanMap extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log("Roman Map mounted");
  }

  mapTimeLapse() {
    const timeline = document.querySelector('.map-of-rome');
    if (timeline.scrollLeft < 0) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE-338b.gif)';
            } else if( 1000 < timeline.scrollLeft && timeline.scrollLeft < 2000) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE-279n.gif)';
            } else if( 2000 < timeline.scrollLeft && timeline.scrollLeft < 3000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE-214n.gif)';
            } else if( 3000 < timeline.scrollLeft && timeline.scrollLeft < 4000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE-86n.gif)';
            } else if( 4000 < timeline.scrollLeft && timeline.scrollLeft < 5000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0009x.gif)';
            } else if( 5000 < timeline.scrollLeft && timeline.scrollLeft < 6000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0116x.gif)';
            } else if( 6000 < timeline.scrollLeft && timeline.scrollLeft < 7000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0269n.gif)';
            } else if( 8000 < timeline.scrollLeft && timeline.scrollLeft < 9000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0336x.gif)';
            } else if( 9000 < timeline.scrollLeft && timeline.scrollLeft < 10000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0485n.gif)';
            } else if( 10000 < timeline.scrollLeft && timeline.scrollLeft < 11000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0564x.gif)';
            } else if( 11000 < timeline.scrollLeft && timeline.scrollLeft < 12000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0623n.gif)';
            } else if( 12000 < timeline.scrollLeft && timeline.scrollLeft < 13000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0754n.gif)';
            } else if( 13000 < timeline.scrollLeft && timeline.scrollLeft < 14000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0812x.gif)';
            } else if( 14000 < timeline.scrollLeft && timeline.scrollLeft < 15000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0925n.gif)';
            } else if( 15000 < timeline.scrollLeft && timeline.scrollLeft < 16000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE1040x.gif)';
            } else if( 16000 < timeline.scrollLeft && timeline.scrollLeft < 17000 ) {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE1181x.gif)';
            } else {
              document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE-338b.gif)'
            }
          }


  render() {
    return (
      <div className="map-of-rome">
      </div>
    )
  }
}
