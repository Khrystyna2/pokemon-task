const formatPokemonsData = pokemonsList => {
  const pokemons = [];

  pokemonsList &&
    pokemonsList.map(pokemon => {
      const pokemonDetail = {
        id: pokemon.id,
        name: pokemon.name,
        imageSrc: pokemon.sprites.front_default,
        height: pokemon.height,
        weight: pokemon.weight,
        totalMoves: pokemon.moves.length,
        types: [],
      };

      pokemon.stats.map(
        ({ stat, base_stat }) => (pokemonDetail[stat.name] = base_stat),
      );
      pokemon.types.map(types => pokemonDetail.types.push(types.type.name));

      pokemons.push(pokemonDetail);
    });
  return pokemons;
};

export default formatPokemonsData;
