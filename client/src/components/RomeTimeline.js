import React, {Component} from 'react';

export default class RomeTimeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    // const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=cirrusdoc%7Crevisions&list=&export=1&titles=Timeline_of_Roman_history"
    fetch(url)
      // .then(res => res.json())
      .then(data => this.setState({
        data: data.query
      }))
  }

  render() {
    if (!this.state.data) return null;
// const events = this.state.data.map((event, index) => (
//   <p key={index}>{event}</p>
//
// ))
console.log(this.state.data);
    return (
      <div className="App">
<p>Timeline</p>
{/* {events} */}
      </div>
    );
  }
}



}
