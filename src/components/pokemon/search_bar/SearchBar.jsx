import { useState } from "react";
import PropTypes from 'prop-types';

export default function SearchBar({searching}) {
    const [searchPokemon, setSearchPokemon] =useState("");
  return (
    <form onSubmit={searching}>
      <label htmlFor="search">
        <input
          type="text"
          placeholder="Search for Pokemon..."
          name="search"
          id="search"
          onChange={(e)=>setSearchPokemon(e.target.value)}
        />
        {console.log(searchPokemon)}
      </label>
      <button>Search</button>

      <button>Reset</button>
    </form>
  );
}

SearchBar.props = {
    types: PropTypes.function,   
  }