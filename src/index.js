import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import PokemonCard from "./PokemonCard";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
      pokemonList: []
    }
  }
  async componentDidMount() {
      let res = await axios.get(this.state.url);
      this.setState({ pokemonList: res.data["results"] })
      console.log(this.state.pokemon, "pokemon data");

  };
  render(){
    return ( 
      <React.Fragment>
        <div className="grid-container">
          {this.state.pokemonList.map( pokemon => (
            <PokemonCard url={ pokemon.url } name={ pokemon.name }></PokemonCard>
          ))}
        </div>

      </React.Fragment>

    )
  };
 

}


ReactDOM.render( < App / > , document.querySelector("#root"));