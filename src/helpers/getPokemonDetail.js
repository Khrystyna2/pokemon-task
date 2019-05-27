
const getPokemonDetail = pokemon => {
    const pokemonDetail = {
        name: pokemon.name,
        imageSrc: pokemon.sprites.front_default,
        types: pokemon.types,
        height: pokemon.height,
        weight: pokemon.weight,
        totalMoves: pokemon.moves.length
    }

    pokemon.stats.map(({ stat, base_stat }) => pokemonDetail[stat.name] = base_stat)

    return pokemonDetail;
}

export default getPokemonDetail;