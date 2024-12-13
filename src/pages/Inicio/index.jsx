
import Rodape from '../../components/Rodape'
import Cabecalho from '../../components/Cabecalho'
import styles from './Inicio.module.css'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import Cards from '../../components/Cards'
import cards from '../../json/db.json'

export default function Inicio() {
    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {cards.map((card) => {
                    return <Cards {...card} key={card.id} />
                })}
            </section>
        </>
    )
}