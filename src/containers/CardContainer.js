import React, { Component } from "react";
import Card from '../components/Card';
import data from "../db";

class CardContainer extends Component {

  state = {
    characters: []
  }
  
  componentDidMount() {
    this.setState({ 
      characters: data
    });
  }

  render() {    
    return(
      <div className="card-container">
        {
          this.state.characters.map(character => {
            return <Card key={character.id} character={character} handleClick={this.props.handleClick} />
          })
        }
      </div>
    )
  }
}

export default CardContainer;