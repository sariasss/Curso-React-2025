//traer data con prosime All saco lo q sea y kka

import axios from 'axios';
import { Pokemon } from '../models/database';
//traer data con prosime All saco lo q sea y kkan

export const getPokemons = async () => {
  try {

    const ruta = process.env.BASE_URL;
    const response = await axios.get(`${ruta}?limit=20` );

    if(!response.ok){
        throw new Error("Error al obtener los pokemons: ", error);
    }
    const results = response.data.results;

    const pokemons = await Promise.all(
      results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        return details.data; 
      })
    );

    await Pokemon.deleteMany({ name: { $in: pokemons.map(p => p.name) } });
    await Pokemon.insertMany(pokemons);
    
    console.log("Los 20 primeros Pokémon han sido reiniciados con éxito.");

  } catch (error) {
    console.error('Error al actualizar la colección de Pokémon:', error);
  }
};
