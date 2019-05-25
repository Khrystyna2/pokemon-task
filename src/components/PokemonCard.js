import React from 'react';
import colorsAndTypes from './../helpers/colorsAndTypes';


const PokemonCard = ({ pokemon: { name, sprites: { front_default }, types }, onSetCurrentPokemon }) => (
    <div className="col-12 col-sm-6 col-xl-4">
        <div className="card bg-light border-light mb-3">
            <div className="card-image">
                <img src={front_default} alt={name} />
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>
                <div className="d-flex justify-content-center flex-wrap">
                    {types.map(({ type: { name } }) => <span key={name} className={`${colorsAndTypes[name]} btn btn-sm card-tag`}>{name}</span>)}
                </div>
                <button className="btn btn-primary w-100" onClick={onSetCurrentPokemon}>Detail</button>
            </div>
        </div>
    </div>
)


export default PokemonCard;