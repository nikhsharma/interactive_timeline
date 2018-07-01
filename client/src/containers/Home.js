import React, {Component} from 'react';
import Header from './Header';
import Categories from './Categories';
import '../style/Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], formattedapidata: [] };
    this.handleapidata = this.handleapidata.bind(this);
  }
  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=cirrusdoc%7Crevisions&list=&export=1&titles=Timeline_of_Roman_history";
    const datatoignore = ["Year", "Date", "Event", "BC", "AC"];

    fetch(url).then(res => res.json()).then(data => {
      this.setState({ data: data.query.pages[344636].cirrusdoc[0].source.auxiliary_text })
      this.handleapidata(datatoignore);
    });
  }
  handleapidata(datatoignore) {
    let splitdata = [];
    let finsiheddata = [];

    // Loops through all of the api data to prepare it for the database
    for (let i = 0; i < this.state.data.length; i++) {
      splitdata.push(this.state.data[i].split("."));
    }
    for (let i = 0; i < splitdata.length; i++) {
      for (let i = 0; i < splitdata[i].length; i++) {
        if (!isNaN(parseInt(splitdata[i][i][2]))) {
          finsiheddata.push(splitdata[i][i].split("  "));
        }
      }
    }
    this.setState({ formattedapidata: finsiheddata });
    console.log(this.state.formattedapidata);
  }
  request() {

  }


  render() {
    return(
      <div className='home-content'>
        <Header />
        <Categories />
      </div>
    )
  }
}
