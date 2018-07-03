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

  render() {
    return (
      <div className="map-of-rome">
        This is a map
      </div>
    )
  }
}
