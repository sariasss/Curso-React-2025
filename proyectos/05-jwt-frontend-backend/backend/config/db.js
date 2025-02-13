// aqui gestiono la conexión con la BD de MongoDB
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// uso variables de entorno

dotenv.config();

//función para conectar con la BD
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,            
        });

        console.log('Conexión exitosa a la BD');
    } catch (error) {
        console.error('Error al conectar a la BD MongoDB',error);
        process.exit(1);
    }
};

export default connectDB;