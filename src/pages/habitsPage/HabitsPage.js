import { createElement, useState } from "react"
import styled from "styled-components"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import { BACKGROUND_COLOR, BASE_COLOR, ACCENT_COLOR } from "../../constants/colors"
import NovoHabito from "./NovoHabito"
import Todo from './Todo'


export default function HabitsPage() {

    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    const [novoHabito, setNovoHabito] = useState(false);
    function criaHabito(){
        setNovoHabito(!novoHabito)
    }
    return (
        <Tela>
            <NavBar />
            <Topo>
                <h1>Meus Hábitos</h1>
                <button onClick={criaHabito} >+</button>
            </Topo>
            {novoHabito === true ? <NovoHabito novoHabito={novoHabito} setNovoHabito={setNovoHabito} dias={dias} /> : ''}
            <Todo dias={dias} />
            <Aviso>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Aviso>
            <Footer />
        </Tela>
    )
}

const Tela = styled.div`
    padding: 30px 20px;
    width: 100%;
    min-height: 527px;
    margin: 70px 0%;
    background-color: ${BACKGROUND_COLOR};
    font-family: 'Lexend Deca', sans-serif;
`

const Topo = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >h1{
        font-size: 23px;
        color: ${ACCENT_COLOR};
    }
    >button{
        width:40px;
        height: 40px;
        border: none;
        border-radius: 5px;
        background-color: ${BASE_COLOR};
        color: white;
        font-size: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const Aviso = styled.div`
    >p{
        color: #666666
    }
`
