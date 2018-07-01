import React, {Component} from 'react';
import Header from './Header';
import Categories from './Categories';
import '../style/Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], formattedapidata: [], test: [] };
    this.handleapidata = this.handleapidata.bind(this);
    this.savetodb = this.savetodb.bind(this);
    this.createobjectsfordb = this.createobjectsfordb.bind(this);
  }
  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=cirrusdoc%7Crevisions&list=&export=1&titles=Timeline_of_Roman_history";
    const datatoignore = ["Year", "Date", "Event", "BC", "AC"];

    // Fetches data and goes deep into the response json before saving to the state as we only want the nessesary data stored.
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        data: data.query.pages[Object.keys(data.query.pages)].cirrusdoc[0].source.auxiliary_text
      });     
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
    // Loops through the length of splitdata
    for (let i = 0; i < splitdata.length; i++) {
      // Loops through the length of splitdata
      for (let j = 0; j < splitdata[i].length; j++) {
        // Checks to see if the char at that index is a number and if so it will split on the " " splitting to a year and a sentence.
        if (!isNaN(parseInt(splitdata[i][j][2]))) {
          finsiheddata.push(splitdata[i][j].split("  "));
        }
      }
    }
    // Stores data in the formattedapidata array within the state.
    this.setState({ formattedapidata: finsiheddata });
    this.createobjectsfordb()
  } 
  createobjectsfordb(){
    const databaseEntries = [];

    // Loops through the formatted data to push into an object for the mongo db.
    for (let i = 0; i < this.state.formattedapidata.length; i++) {
      if (this.state.formattedapidata[i].length === 2) {
        // Creates an object that contains a year and some text content from the info provided.
        databaseEntries.push({
          data_date: this.state.formattedapidata[i][0],
          content: this.state.formattedapidata[i][1]
        });
      }
    }
    this.savetodb(databaseEntries);
  }
  savetodb(databaseEntries) {
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3001/api/history", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(databaseEntries));
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
