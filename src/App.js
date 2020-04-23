import React, { Component } from "react";
import Banner from "./components/Banner";
import data from "../db";
import "./styles.css";

class App extends Component {

  state = {
    characters: []
  }
  
  componentDidMount() {
    this.setState({ 
      characters: data
    });
  }

  render() {
    return (
      <div className="App">
        <Banner />
      </div>
    );
  }
}

export default App;


