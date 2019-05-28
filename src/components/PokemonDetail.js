import React from 'react';

const PokemonDetail = ({ pokemon: { name, imageSrc, types, attack, defense, height, hp, 'special-attack': specialAttack, 'special-defense': specialDefense, weight, totalMoves }, onHideCard }) => (
    <div className="col-12 col-md-4 col-xl-3">
        <div className="card card-detail bg-light border-light mb-3">
            <button type="button" className="close" onClick={onHideCard}>
                <span>&times;</span>
            </button>
            <div className="card-image">
                <img src={imageSrc} alt={name} />
            </div>
            <h4 className="card-title text-center my-3">{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">Type <span className="d-flex flex-column">{types && types.map(name => <span key={name}>{name}</span>)}</span></li>
                <li className="list-group-item d-flex justify-content-between">Attack<span>{attack}</span></li>
                <li className="list-group-item d-flex justify-content-between">Defense<span>{defense}</span></li>
                <li className="list-group-item d-flex justify-content-between">HP<span>{hp}</span></li>
                <li className="list-group-item d-flex justify-content-between">Special Attack<span>{specialAttack}</span></li>
                <li className="list-group-item d-flex justify-content-between">Special Defense<span>{specialDefense}</span></li>
                <li className="list-group-item d-flex justify-content-between">Height<span>{height}</span></li>
                <li className="list-group-item d-flex justify-content-between">Weight<span>{weight}</span></li>
                <li className="list-group-item d-flex justify-content-between">Total Moves<span>{totalMoves}</span></li>
            </ul>
        </div>
    </div>
)


export default PokemonDetail;