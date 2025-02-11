import { Pokemon } from "./database";

export const insertPokemon = async (pokemonData) => {
    try {
      const newPokemon = await Pokemon.create(pokemonData);
      console.log("Pokémon insertado correctamente:", newPokemon);
      return newPokemon;
      
    } catch (error) {
        throw new Error("Error al inserta Pokemon: ", error);      
    }
  };

  //borrar pokemon
export const deletePokemon = async (pokemon) => {
  try {
    const response = await fetch(`pokemon/${pokemon}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if(!response.ok){
      throw new Error("Error al eliminar el pokemon: ", error);
      
    }
  } catch (error) {
    console.error("Error al borrar el pokemon: ", error);
  }
}