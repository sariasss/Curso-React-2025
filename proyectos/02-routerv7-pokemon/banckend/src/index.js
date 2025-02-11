import express from "express";
import cors from "cors";
import pokemonRoutes from "./routers/pokemonRouter.js";
import { connectDB } from "./data.js";
import favoriteRoutes from "./routers/favoriteRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(cors({
    origin: process.env.CORS || 'http://localhost:5173',
    credentials: true
}));
  
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

async function init() {
    try {
        await connectDB();
    } catch (error) {
        console.error("Error al inicializar la BD:", error);
        process.exit(1);
    }
}
init();

app.use("/api", pokemonRoutes);
app.use("/api", favoriteRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
