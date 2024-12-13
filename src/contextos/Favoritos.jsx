import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext;
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);
    return (
        <FavoritosProvider
            value={{
                favorito,
                setFavorito,
            }}
        >
            {children}
        </FavoritosProvider>
    )
}

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            setFavorito(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);

        return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito,
    }
}