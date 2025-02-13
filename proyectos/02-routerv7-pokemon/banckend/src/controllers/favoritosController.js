import { Favorite } from "../models/database.js";

export const getFavoritos = async (req,res) => {
  try {
      const favoritos = await Favorite.find();
      if (favoritos.length === 0) {
        return res.status(404).json({ mensaje: "No hay favoritos" });
    }
    res.json(favoritos);
  } catch (error) {
      res.status(400).json({messaje:"Error al obtener los favoritos"});   
  }
}

export const addFavorito = async (req, res) => {
    try {
        const { pokemonId } = req.body;

        const existe = await Favorite.findOne({ pokemonId });
        if (existe) {
            return res.status(400).json({ mensaje: "Este Pokémon ya está en favoritos" });
        }

        const favorite = new Favorite(req.body);
        await favorite.save();
        res.status(201).json({ mensaje: "Pokemon añadido a favoritos" });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al añadir a favoritos", error: error.message });
    }
}

export const delFavorito = async (req, res) => {
    try {
        const { id } = req.body;
        const favorito = await Favorite.findByIdAndDelete(id);

        if (!favorito) {
            return res.status(404).json({ mensaje: "Favorito no encontrado" });
        }

        res.json({ mensaje: "Pokemon eliminado de favoritos" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar favorito" });
    }
}
