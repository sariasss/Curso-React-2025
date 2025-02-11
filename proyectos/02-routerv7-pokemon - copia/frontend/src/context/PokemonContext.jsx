import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
    // añadir pokemons a favoritos
    const addToFavorites = (pokemon)=>{
        //comprobar si el pokemon ya está en favoritos
        if(favorites.some(p=>pokemon.id===p.id)){
            //pokemon repe --> error
            toast.error("El pokemon ya esta en favoritos", {
                style: {
                    background: 'red',
                    color:'white',
                    border:"1px solid black",
                },
                icon: '⭐',
            })
           return;
        }
        //añadirmos el pokemon a favoritos
        setFavorites(prevFavorites => [...prevFavorites, pokemon])
        toast.success(`Pokemon ${pokemon.name} añadido correctamente`, {
            style: {
                background: 'green',
                color:'white',
                border:"1px solid black",
            }, 
            icon: '⭐',
        });
    }
    const removeFromFavorites = (pokemonId) => {
        setFavorites(prevFavorites=>prevFavorites.filter(p=>p?.id !== pokemonId));
        toast.info("Pokemon eliminado de favortios")
    }
    return (
        <PokemonContext.Provider value={ {favorites, addToFavorites, removeFromFavorites} }>
            {children}
        </PokemonContext.Provider>
    );
}

export const usePokemon = () =>{
    const context = useContext(PokemonContext);
    if(context === undefined){
        throw new Error("usePokemon debe ser usado dentro de ");   
    }
    return context;
}