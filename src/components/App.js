import React, { Component } from 'react';
import { fetchPokemonList } from '../API';

import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';

const filterByType = (filterBy, pokemons) => pokemons.filter(({ types }) => types.some(name => name.includes(filterBy)))

export class App extends Component {

    state = {
        pokemonItems: [],
        currentPokemon: {},
        limit: 12,
        offset: 0,
        currentPokemon: {},
        pokemonDetail: false,
        filterBy: ''
    }

    componentDidMount() {
        const { limit, offset } = this.state;
        fetchPokemonList(limit, offset)
            .then(data => this.setState({ pokemonItems: data, offset: offset + 12 }));
    }

    handleLoadMorePokemons = () => {
        this.setState(state => ({ offset: state.offset + 12 }))
        const { limit, offset } = this.state;
        fetchPokemonList(limit, offset)
            .then(data => this.setState(state => ({ pokemonItems: [...state.pokemonItems, ...data] })))
    }

    setCurrentPokemon = pokemon => this.setState({
        currentPokemon: pokemon, pokemonDetail: true
    })

    hidePokemonDetail = () => this.setState({ pokemonDetail: false })

    setFilterBy = e => this.setState({ filterBy: e.target.value })



    render() {
        const { pokemonItems, currentPokemon, pokemonDetail, filterBy } = this.state;
        const filterPokemons = filterByType(filterBy, pokemonItems)
        return (
            <div className="container">
                <h1 className="my-5 text-center">POKEDEX</h1>
                <input type='text' onChange={this.setFilterBy} className="my-3 input-style" value={filterBy} placeholder="Pokemon Type" />
                <div className="row">
                    <PokemonList items={filterPokemons} onLoadMorePokemons={this.handleLoadMorePokemons} onSetCurrentPokemon={this.setCurrentPokemon} />
                    {pokemonDetail && <PokemonDetail onHideCard={this.hidePokemonDetail} pokemon={currentPokemon} />}
                </div>
            </div>
        )
    }
}

export default App;
