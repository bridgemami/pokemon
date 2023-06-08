import { useState } from "react";
import useFetch from "../../hooks/useFetch";
// import Info from "../info/Info";
//create the new file and folder above and the snippet is called usefetch
export default function Pokemon() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 152));
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${random}`);
  //destructure the data property and give it a name
  //useFetch(url, {type: "GET"} or array make sure have use useRef in useFetch.js
  const { data: pokemons, isPending, error } = useFetch(url);

  console.log(pokemons);
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
              <h2>{pokemons.name.substring(0,1).toUpperCase()}{pokemons.name.substring(1)}</h2>
              <img src={pokemons.sprites.front_default} alt={pokemons.name} />
              {/* <p>Type(s):{pokemons.types.map((type)=>{type.map((ty=> {return (
                <span key={ty.slot}>{ty.name}</span>
              )}))})}</p> */}
            </section>
            // pokemons.types[0].type.name
          )
        }
    </article>
  );
}
