
import Titulo from '../../components/Titulo'
import Banner from '../../components/Banner'
import styles from './Favoritos.module.css'
import Cards from '../../components/Cards'

export default function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo><h1>Meus favoritos</h1></Titulo>
            <section className={styles.container}>
                <Cards />
            </section>
        </>
    )
}