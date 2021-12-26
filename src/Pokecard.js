import React, { Component } from "react";
import "./Pokecard.css";

// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const id = this.props.id;
    const name = this.props.name;
    const type = this.props.type;
    const exp = this.props.exp;

    let imgSrc = `${POKE_API}${padToThree(id)}.png`;

    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{name}</h1>
        <div className='Pokecard-image'>
          <img className='Pokecard-img' alt={name} src={imgSrc}></img>
        </div>
        <div className='Pokecard-text'>Type: {type}</div>
        <div className='Pokecard-exp'>EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
