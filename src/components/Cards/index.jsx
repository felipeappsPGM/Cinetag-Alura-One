import styles from './Cards.module.css'
import iconeFavoritar from './favorite_outline.png'
import iconeDesfavoritar from './favorite.png'
import { useFavoritoContext } from '../../contextos/Favoritos'
import { Link } from 'react-router-dom';

export default function Cards({ id, capa, titulo }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
            <Link className={styles.linl} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>

            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }} />
        </div>

    )
}