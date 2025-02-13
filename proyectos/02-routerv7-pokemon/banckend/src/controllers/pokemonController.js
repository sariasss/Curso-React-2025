import { Pokemon } from "../models/database.js";

const BASE_URL = process.env.BASE_URL;

export const getPokemons = async (req, res) => {
  try {
    await Pokemon.deleteMany({});

    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Error en la url");
    }
    const data = await response.json();

    await Promise.all(
      data.results.map(async (pokemon) => {
        const respo = await fetch(pokemon.url);

        if (!respo.ok) {
          throw new Error("Error en pokemonDetail");
        }
        
        const data = await respo.json();
        const newPokemon = new Pokemon(data);
        await newPokemon.save();
      })
    );
    res.status(200).json({ mensaje: "Pokémons actualizados correctamente" });

  } catch (error) {
    console.error("Error al obtener los pokemons", error);
    res.status(500).json({ message: "Error al obtener los pokemons" });
  }
};

export const getPokemonByValue = async (req, res) => {
  try {
    const { value } = req.params;

    //prueba con id
    let pokemon = await Pokemon.findOne({ id: parseInt(value) });
    //si no con nombre
    if (!pokemon) {
      pokemon = await Pokemon.findOne({ name: value.toLowerCase() });
    }

    if (!pokemon) {
      return res.status(404).json({ mensaje: "Pokemon no encontrado" });
    }
o
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el pokemon", error: error.message });
  }
}

