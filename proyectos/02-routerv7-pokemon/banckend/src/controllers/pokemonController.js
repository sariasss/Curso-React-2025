import { Pokemon } from "../models/database.js";

export const getPokemonHandler = async (req, res) => {
  const { name } = req.params;

  try {
    const pokemon = await Pokemon.findOne({ name: name.toLowerCase() });
    if (!pokemon) {
      return res.status(404).json({ error: `Pokémon ${name} no encontrado.` });
    }
    return pokemon;

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
