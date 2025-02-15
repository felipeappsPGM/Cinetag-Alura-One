
import Banner from '../../components/Banner'
import styles from './Player.module.css'
import Titulo from '../../components/Titulo'
import { useParams } from 'react-router-dom'
import videos from '../../json/db.json'
import NaoEncontrada from '../NaoEncontrada'
export default function Player() {
    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === parseInt(parametros.id)
    })

    if(!video){
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture;"
                    allowFullScreen
                ></iframe>
            </section>

        </>
    )
}