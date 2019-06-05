import React from 'react';

const ButtonLoadMore = ({ onLoadMorePokemons }) => {
  return (
    <button className="btn btn-info w-100 my-5" onClick={onLoadMorePokemons}>
      load more
    </button>
  );
};

export default ButtonLoadMore;
