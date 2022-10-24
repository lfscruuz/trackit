import styled from "styled-components"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import Card from "./Card"
import { BACKGROUND_COLOR, BASE_COLOR, ACCENT_COLOR } from "../../constants/colors"
import dayjs from 'dayjs'
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import UserContext from "../../constants/Context"

export default function TodayPage() {

    const [listaHabitos, setListaHabitos] = useState([])
    const [porcentagem, setPorcentagem] = useState(0)
    const { user,concluido, setConcluido, qtdHabitos, setQtdHabitos, progress} = useContext(UserContext);
    var updateLocale = require('dayjs/plugin/updateLocale')
    dayjs.extend(updateLocale)
    dayjs.updateLocale('br', {
            weekdays: [
                'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'
            ]
        }
    )

    useEffect(() => {
        axios.get(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            {
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            }
        )
            .then((res) => {
                setListaHabitos(res.data)
                setQtdHabitos(res.data.length)
                console.log(res.data)
            })
    }, [])

    

    return (
        <Tela>
            <NavBar />
            <Topo>
                <h1>{
                dayjs().locale('br').format('dddd')}, {dayjs().locale('br').format('DD/MM')}
                </h1>
                {concluido === 0 ?
                    <h2 className="nenhum" >Nenhum hábito concluído ainda</h2> :
                    <h2 className="mais-do-que-um" >{progress}% dos hábitos concluidos</h2>
                }
            </Topo>
            {qtdHabitos !== 0 ?
                listaHabitos.map((h) => {
                    return (
                        <Card habito={h} key={h.id} concluido={concluido} setConcluido={setConcluido} />
                    )
                })
                : ''
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
    flex-direction: column;
    justify-content: space-between;
    >h1{
        font-size: 23px;
        color: ${ACCENT_COLOR};
        margin: 5px 0;
    }
    >.nenhum{
        font-size: 18px;
        color: #BABABA;
    }
    >.mais-do-que-um{
        font-size: 18px;
        color: #8FC549;
    }
`