import React from 'react';
import PokemonCard from './PokemonCard';
import ButtonLoadMore from './ButtonLoadMore';

const PokemonList = ({ items, onLoadMorePokemons, onSetCurrentPokemon }) => {
    return (
        <div className="col-12 col-md-8 col-xl-9">
            <div className="row">
                {items.length > 0 && items.map(pokemon =>
                    <PokemonCard key={pokemon.id} pokemon={pokemon} onSetCurrentPokemon={() => onSetCurrentPokemon(pokemon)} />)}
                <ButtonLoadMore onLoadMorePokemons={onLoadMorePokemons} />
            </div>
        </div>
    )
}

export default PokemonList;