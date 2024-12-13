import styles from './Cards.module.css'
import iconeFavoritar from './favorite_outline.png'
import iconeDesfavoritar from './favorite.png'

export default function Cards({capa, titulo, link, key}){
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <img src={iconeFavoritar} alt="Favoritar filmes" className={styles.favoritar}/>
        </div>
    )
}