import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Name from "./Name";
import Image from "./Image";
import Types from "./Types";
import Game from "./Game";
// import Info from "../info/Info";
//create the new file and folder above and the snippet is called usefetch
export default function Pokemon() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 500));
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${random}`);
  //destructure the data property and give it a name
  //useFetch(url, {type: "GET"} or array make sure have use useRef in useFetch.js
  const { data: pokemons, isPending, error } = useFetch(url);

  //   console.log(`Name is ${pokemons.name}`);
  return (
    <article>
      {/* for the error is true */}
      {error && <p>The error is {error}</p>}
      {/* for the isPending is true. You need the && */}
      {isPending && <p>Loading data...</p>}
      {/* the && is used if only we have a value */}
      {pokemons && (
        <section key={pokemons.id}>
          <section>
            <Name id={pokemons.id} name={pokemons.name} />
            <Image src={pokemons.sprites.front_default} alt={pokemons.name} />
          </section>
          <Types types={pokemons.types} />
          <Game game={pokemons.game_indices} />
        </section>
      )}
    </article>
  );
}
