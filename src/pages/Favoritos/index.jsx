
import Titulo from '../../components/Titulo'
import Banner from '../../components/Banner'
import styles from './Favoritos.module.css'
import Cards from '../../components/Cards'
import { useFavoritoContext } from '../../contextos/Favoritos'

export default function Favoritos() {
    const {favorito} = useFavoritoContext()
    return (
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo><h1>Meus favoritos</h1></Titulo>
            <section className={styles.container}>
           
            {favorito.map((fav) => (
                <Cards
                  key={fav.id}
                  {...fav}
                  />
            ))}
                
            </section>
        </>
    )
}