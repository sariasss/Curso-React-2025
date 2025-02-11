import express from "express";
import { getPokemonHandler, getPokemons } from "../controllers/pokemonController.js"; // Agregar .js

const router = express.Router();

router.get("/pokemon/:name", async (req, res) => {
    const { name } = req.params;
    try {
        const data = await getPokemonHandler(name);
        res.json(data);
        
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
        res.status(500).json({ error: "Error al obtener el Pokémon" });
    }
});

router.get("/pokemon", async (req, res) => {
    try {
        const data = await getPokemons();
        res.json(data);
    } catch (error) {
        console.error("Error al obtener los Pokémon:", error);
        res.status(500).json({ error: "Error al obtener los Pokémon" });
    }
});

export default router;
