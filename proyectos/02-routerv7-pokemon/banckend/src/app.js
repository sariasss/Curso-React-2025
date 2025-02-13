import express from "express";
import cors from "cors";
import pokemonRoutes from "./routers/pokemonRouter.js";
import { connectDB } from "./data/data.js";

import favoriteRoutes from "./routers/favoriteRouter.js";

const app = express();
const CORS = process.env.CORS ||  'http://localhost:5173';

app.use(cors({
    origin: CORS,
    credential:true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
  
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

connectDB();

app.use("/api/pokemon", pokemonRoutes);
app.use("/api/favorite", favoriteRoutes);

export default app;