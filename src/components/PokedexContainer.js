import React, { Component } from 'react';
import fetchPokemonList from './../API';
import getPokemonDetail from '../helpers/getPokemonDetail';

import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';


export class PokedexContainer extends Component {

    state = {
        pokemonItems: [],
        limit: 12,
        offset: 0,
        currentPokemon: {},
        pokemonDetail: false
    }

    componentDidMount() {
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

    setCurrentPokemon = pokemon => this.setState({
        currentPokemon: getPokemonDetail(pokemon), pokemonDetail: true
    })

    hidePokemonDetail = () => this.setState({ pokemonDetail: false })


    render() {
        const { pokemonItems, currentPokemon, pokemonDetail } = this.state;
        console.log(pokemonItems)
        return (
            <div className="container">
                <h1 className="my-5 text-center">POKEDEX</h1>
                <div className="row">
                    <PokemonList items={pokemonItems} onLoadMorePokemons={this.handleLoadMorePokemons} onSetCurrentPokemon={this.setCurrentPokemon} />
                    {pokemonDetail && <PokemonDetail onHideCard={this.hidePokemonDetail} pokemon={currentPokemon} />}
                </div>
            </div>
        )
    }
}

export default PokedexContainer;
