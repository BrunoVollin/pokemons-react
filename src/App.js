import { useEffect, useState } from "react";
import CardPokemon from "./components/CardPokemon";
import Header from "./components/Header";
import PokemonItem from "./components/PokemonItem";
import "./styles.css";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    getPokemonData(selectedPokemon.url);
  }, [selectedPokemon.url]);

  async function getPokemons() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon"
      ).then((res) => res.json());
      console.log(response.results);
      setPokemons(response.results);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPokemonData(url) {
    try {
      const response = await fetch(url).then((res) => res.json());
      setPokemonData(response);
      console.log(pokemonData.sprites.front_default);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {pokemonData.sprites ? (
          <CardPokemon
            imageUrl={pokemonData.sprites.front_default}
            name={pokemonData.name}
            order={pokemonData.order}
            weight={pokemonData.weight}
            height={pokemonData.height}
          />
        ) : null}

        <div>
          {pokemons.map(({ name, url }) => (
            <PokemonItem
              name={name}
              selected={name === selectedPokemon.name}
              onClick={() => {
                setSelectedPokemon({ name, url });
                console.log({ name, url });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
