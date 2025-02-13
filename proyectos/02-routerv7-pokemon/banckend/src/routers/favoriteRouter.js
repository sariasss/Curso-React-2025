import express from "express";
import { addFavorito, delFavorito, getFavoritos } from "../controllers/favoritosController.js";


const router = express.Router();

router.post("/favoritos", addFavorito);
router.delete("/favoritos/:id", delFavorito);
router.get("/favoritos", getFavoritos);

export default router;
