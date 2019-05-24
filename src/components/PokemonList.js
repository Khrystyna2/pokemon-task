import React from 'react';
import PokemonCard from './PokemonCard';
import ButtonLoadMore from './ButtonLoadMore';

const PokemonList = ({ items, onLoadMorePokemons }) => {
    console.log(onLoadMorePokemons)
    return (
        <div className="col-12 col-md-8 col-xl-9">
            <div className="row">
                {items.length > 0 && items.map(({ id, name, sprites: { front_default }, types }) =>
                    <PokemonCard key={id} name={name} imgSrc={front_default} types={types} />)}
                <ButtonLoadMore onClick={onLoadMorePokemons} />
                <button className="btn btn-info w-100 my-5" onClick={onLoadMorePokemons}>load more</button>
            </div>
        </div>
    )
}

export default PokemonList;