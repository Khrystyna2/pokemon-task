import React, { Component } from 'react';
import PokemonList from './PokemonList';
import fetchPokemonList from './../API';


export class PokedexContainer extends Component {

    state = {
        pokemonItems: [],
        limit: 12,
        offset: 0
    }

    componentWillMount() {
        const { limit, offset } = this.state;
        fetchPokemonList(limit, offset)
            .then(data => this.setState({ pokemonItems: data, offset: offset + 12 }))
    }

    handleLoadMorePokemons = () => {
        this.setState(state => ({ offset: state.offset + 12 }))
        const { limit, offset } = this.state;
        fetchPokemonList(limit, offset)
            .then(data => this.setState(state => ({ pokemonItems: [...state.pokemonItems, ...data] })))
    }

    render() {
        const { pokemonItems } = this.state;
        console.log(pokemonItems)
        return (
            <div className="container">
                <h1 className="my-5 text-center">POKEDEX</h1>
                <div className="row">
                    <PokemonList items={pokemonItems} onLoadMorePokemons={this.handleLoadMorePokemons} />
                </div>
            </div>
        )
    }
}

export default PokedexContainer
