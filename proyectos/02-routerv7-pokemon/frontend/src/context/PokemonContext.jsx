import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

const PokemonContext = createContext();
const VITE_API_URL = import.meta.env.VITE_API_URL;

export function PokemonProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    // Función para obtener los favoritos al montar el componente
    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await fetch(`${VITE_API_URL}/favorite`);
                if (!response.ok) {
                    throw new Error("Error al obtener la data");
                }
                const data = await response.json();
                setFavorites(data);
            } catch (error) {
                console.error("Error en fetchFavorites:", error);
            }
        };
        fetchFavorites();
    }, []);

    const addToFavorites = async (pokemon) => {
        try {
            if (favorites.some(p => pokemon.id === p.id)) {
                toast.error("El pokemon ya está en favoritos", {
                    style: {
                        background: 'red',
                        color: 'white',
                        border: "1px solid black",
                    },
                    icon: '⭐',
                });
                return;
            }
            const response = await fetch(`${VITE_API_URL}/favorite`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pokemon),
            });

            if (response.ok) {
                const newFavorite = await response.json();
                setFavorites(prev => [...prev, newFavorite]);
                toast.success(`Pokémon ${pokemon.name} añadido correctamente`, {
                    style: {
                        background: 'green',
                        color: 'white',
                        border: "1px solid black",
                    },
                    icon: '⭐',
                });
            }
        } catch (error) {
            console.error('Error adding favorite:', error);
        }
    };

    const removeFromFavorites = async (pokemonId) => {
        try {
            const response = await fetch(`${VITE_API_URL}/favorite/${pokemonId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error("Error al eliminar el Pokémon de favoritos");
            }
            setFavorites(prev => prev.filter(p => p.id !== pokemonId));

            toast.info("Pokémon eliminado de favoritos");
        } catch (error) {
            console.error("Error en removeFromFavorites:", error);
        }
    };

    return (
        <PokemonContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </PokemonContext.Provider>
    );
}

// Hook personalizado para usar el contexto
export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemon debe ser usado dentro de un PokemonProvider");
    }
    return context;
};
