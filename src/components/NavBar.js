import styled from "styled-components"
import { ACCENT_COLOR } from "../constants/colors"
import logo from '../assets/images/TrackIt.png'
import imagemDePerfil from '../assets/images/yotsuba.jpg'
import { Link } from "react-router-dom"


export default function NavBar() {
    return (
        <Topo>
            <Link to='/habitos'>
                <img src={logo} />
            </Link>
            <img className="imagem-de-perfil" src={imagemDePerfil} />
        </Topo>
    )
}

const Topo = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${ACCENT_COLOR};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;

    >.imagem-de-perfil{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`