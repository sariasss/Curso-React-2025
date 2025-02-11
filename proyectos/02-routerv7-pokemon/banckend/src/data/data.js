// aqui gestiono la conexion con la base de datos MONGODB
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// funcion para conectar con la bd
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Conexion a mongoDB exitosa");
    } catch (error) {
        console.error("Error con la conexion a la bd: ", error);
        process.exit(1);
    }
}