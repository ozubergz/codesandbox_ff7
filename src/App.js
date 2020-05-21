import React, { Component } from "react";
import Banner from "./components/Banner";
import Modal from "./components/Modal";
import CardContainer from "./containers/CardContainer";
import "./styles.css";

class App extends Component {
  state = {
    character: "",
    showModal: false
  };

  handleClick = character => {
    this.setState({
      character: character,
      showModal: true
    });
  };

  handleCloseClick = () => {
    this.setState({
      showModal: false
    });
  };

  // handleOpenClick = () => {
  //   console.log('fired')
  // }

  render() {
    return (
      <div className="App">
        <Banner />
        <CardContainer handleClick={this.handleClick} />
        {this.state.showModal ? (
          <Modal
            character={this.state.character}
            handleCloseClick={this.handleCloseClick}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
