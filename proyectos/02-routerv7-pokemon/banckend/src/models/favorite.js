import { Favorite } from "./database";

export const insertFavorite = async (data) => {
    try {
      const newFavorite = await Favorite.create(data);
      console.log("Pokémon insertado correctamente:", newFavorite);
      return newFavorite;
      
    } catch (error) {
      throw new Error("Error al inserta Favorito: ", error);      
    }
  };

//borrar favorito
export const deleteFavorite = async (pokemon) => {
  try {
    const response = await fetch(`favorite/${pokemon}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if(!response.ok){
      throw new Error("Error al eliminar el favorito: ", error);
      
    }
  } catch (error) {
    console.error("Error al borrar el pokemon: ", error);
  }
}