import express from "express";
import { getPokemonByValue, getPokemons } from "../controllers/pokemonController.js"; // Agregar .js

const router = express.Router();

router.get("/", getPokemons);
router.get("/:value", getPokemonByValue);

export default router;
