
import User from '../models/User.js';
// controlador par aañadir usuarios (protegiso)

const addUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        // creamos y guardamos el usuarios
        const user = new User (username, password);
        await user.save();
        res.status(201).json({message:'Usuario añadido.'});
    } catch (error) {
        console.error('Error al añadir el usuario.',error);
    }
};

// controlador para obtener el perfil del usuario autenticado
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if(!user){
            return res.status(404).json({message: 'Usuario no encontrado.'});
        }
        res.json({id:user._id, username:user.username});
    } catch (error) {
        res.status(400).json({message: 'Error al obtener el perfil del usuario'});
    }
};

export { addUser, getUserProfile };
    