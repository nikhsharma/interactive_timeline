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
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE-279n.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE-214n.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE-86n.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0009x.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0116x.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0269n.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0336x.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0485n.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0564x.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0623n.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0754n.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0812x.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE0925n.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
          document.querySelector('.map-of-rome').src= 'url(/Images/roman_maps/RE1040x.gif)';
        } else if(1950 < timeline.scrollLeft && timeline.scrollLeft < 2050) {
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
