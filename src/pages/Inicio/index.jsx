
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
            <Cabecalho />
            <Banner imagem='home' />
            <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
            <section className={styles.container}>
                {cards.length > 0 && cards.map((card) => (
                    <Cards
                        key={card.id}
                        titulo={card.titulo}
                        capa={card.capa}
                        link={card.link}
                    />
                ))}
            </section>


            <Rodape />
        </>
    )
}