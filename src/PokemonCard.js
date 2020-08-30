import React, { Component } from "react";
import axios from "axios";

class PokemonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: props.url,
            name: null,
            type1: null,
            move: null,
            ability: null,
            image: null
        }
    }
    async componentDidMount(){
        let pokeData = await axios.get(this.props.url)
        console.log(pokeData.data)
        this.setState({
          name: this.props.name,
          type1: (pokeData.data.types[0].type.name ? pokeData.data.types[0].type.name : ""),
          move: pokeData.data.moves[0].move.name,
          ability: pokeData.data.abilities[0].ability.name,
          image: pokeData.data.sprites.front_default
        })
     
    }
    render(){
        return (
            <div className="pokemon-card">
                <img alt="pokeImage" src={ this.state.image } />
                <ul>
                    <li>{ this.state.name }</li>
                    <li>{ this.state.type1 }</li>
                    <li>{ this.state.move }</li>
                    <li>{ this.state.ability }</li>
                </ul>
            </div>
        );
    }
}

export default PokemonCard;