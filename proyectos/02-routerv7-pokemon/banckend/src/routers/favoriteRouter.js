import { insertFavorite } from "../favorite.js"; // Ajusta la ruta según tu estructura

const router = express.Router();

router.post("/favorite", async (req, res) => {
    try {
        const newFavorite = await insertFavorite(req.body);
        res.status(201).json(newFavorite);
    } catch (error) {
        console.error("❌ Error al insertar favorito:", error.message);
        res.status(500).json({ error: error.message });
    }
});

export default router;
