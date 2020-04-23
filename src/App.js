import React, { Component } from "react";
import Banner from "./components/Banner";
import CardContainer from "./containers/CardContainer";
import "./styles.css";

class App extends Component {

 

  render() {
    return (
      <div className="App">
        <Banner />
        <CardContainer />
      </div>
    );
  }
}

export default App;


