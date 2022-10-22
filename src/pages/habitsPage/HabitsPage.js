import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import { BACKGROUND_COLOR, BASE_COLOR, ACCENT_COLOR } from "../../constants/colors"
import UserContext from "../../constants/Context"
import NovoHabito from "./NovoHabito"
import Todo from './Todo'


export default function HabitsPage() {

    const { user } = useContext(UserContext);
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [novoHabito, setNovoHabito] = useState(false);
    const [enviou, setEnviou] = useState(false);
    const [habitos, setHabitos] = useState(undefined);
    const [indiceDosDias, setIndiceDosDias] = useState('');

    useEffect(() => {
        axios.get(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            {
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            }
        )
            .then((res) => {
                setHabitos(res.data)
            })
    }, [enviou])

    function criaHabito() {
        setNovoHabito(!novoHabito)
    }

    return (
        <Tela>
            <NavBar />
            <Topo>
                <h1>Meus Hábitos</h1>
                <button onClick={() => setNovoHabito(!novoHabito)}>+</button>
            </Topo>
            {novoHabito === true ? 
            <NovoHabito 
            novoHabito={novoHabito} setNovoHabito={setNovoHabito} 
            dias={dias} enviou={enviou} setEnviou={setEnviou} 
            indiceDosDias={indiceDosDias}
            /> : ''}
            {habitos === undefined || habitos.length === 0 ?
                <Aviso>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Aviso>
                :
                habitos.map((i) => {
                    return <Todo key={i.id} dias={dias} nome={i.name} id={i.id} setEnviou={setEnviou} enviou={enviou} indiceDosDias={i.days} />
                })
            }
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
