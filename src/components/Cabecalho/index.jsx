import { Link } from "react-router-dom";
import styles from './Cabecalho.module.css'
import logo from './logo.png'
import CabecalhoLink from "../CabecalhoLink";

export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img src={logo} alt='logo' />
            </Link>
            <nav>
                <CabecalhoLink url='./'>Home</CabecalhoLink>
                <CabecalhoLink url='./favoritos'>Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}