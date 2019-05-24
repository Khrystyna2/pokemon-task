import React from 'react';
import colorsAndTypes from './../helpers/colorsAndTypes';



const PokemonCard = ({ name, imgSrc, types }) => (
    <div className="col-12 col-sm-6 col-xl-4">
        <div className="card bg-light border-light mb-3">
            <div className="card-image">
                <img src={imgSrc} alt={name} />
            </div>
            <div className="card-body">
                <h4 className="card-title text-center">{name}</h4>
                <div className="d-flex justify-content-center flex-wrap">
                    {types.map(({ type: { name } }) => <span key={name} className={`${colorsAndTypes[name]} btn card-tag`}>{name}</span>)}
                </div>
                <button className="btn btn-primary btn-sm w-100">Detail</button>
            </div>
        </div>
    </div>
)


export default PokemonCard;