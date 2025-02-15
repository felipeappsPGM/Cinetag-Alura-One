
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Favoritos from "./pages/Favoritos"
import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"
import Container from "./components/Container"
import FavoritosProvider from "./contextos/Favoritos"
import Player from "./pages/Player"
import NaoEncontrada from "./pages/NaoEncontrada"
import PaginaBase from "./pages/PaginaBase"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}