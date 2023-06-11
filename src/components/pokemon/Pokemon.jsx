import { useState } from "react";
import useFetch from "../../hooks/useFetch";
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
      {pokemons &&
           (
            <section key={pokemons.id}>
              <section>
              <h2>{pokemons.id}. {pokemons.name.substring(0,1).toUpperCase()}{pokemons.name.substring(1)}</h2>
              <img src={pokemons.sprites.front_default} alt={pokemons.name} />
              </section>
              <section>
              <h3>Type of Pokemon:</h3>
              <ul>
              {pokemons.types.map((type)=> {
                return (
                  <div key={type.slot}>
                    <li>{type.type.name.substring(0,1).toUpperCase()}{type.type.name.substring(1)}</li>
                  </div>
                )
                })
              }
             </ul>
            </section>
            <section>
            <h3>Pokemon Games:</h3>
              <ul>
              {pokemons.game_indices.map((index, i)=> {
                return (
                  <div key={i}>
                    <li>{index.version.name.substring(0,1).toUpperCase()}{index.version.name.substring(1)}</li>
                  </div>
                )
                })
              }
             </ul>
            </section>
            </section>
          )
        }
    </article>
  );
}
