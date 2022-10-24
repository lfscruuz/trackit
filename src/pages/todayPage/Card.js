import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import checkmark from '../../assets/images/check.svg'
import UserContext from "../../constants/Context"


export default function Card({ habito, concluido, setConcluido }) {

    const {user} = useContext(UserContext)
    const [checar, setChecar] = useState(false)
    if (habito.currentSequence < 0) {
        habito.currentSequence = 0
    }

    useEffect(() =>{
        console.log(concluido)
        if (habito.done === true){
            setConcluido(concluido + 1)
            setChecar(true)
        } else{
            if (concluido !== 0){
                setConcluido(concluido - 1)
            } else{
                setConcluido(0)
            }
        }

    }, [checar])

    function marcaDesmarca() {
        if (checar === false) {
            setChecar(!checar)
            habito.done = true
            habito.currentSequence += 1
            if (habito.currentSequence >= habito.highestSequence) {
                habito.highestSequence = habito.currentSequence
            }
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`, {},
            {
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            })
            .then(() =>{
                console.log(habito)
            })
        } else {
            setChecar(!checar)
            habito.done = false
            habito.currentSequence -= 1
            if (habito.currentSequence === habito.highestSequence){
                habito.highestSequence -= 1
            }
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck`, {},
            {
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            })
            .then(() =>{
                console.log(habito)
            })
        }
    }

    return (
        <Container>
            <h1>{habito.name}</h1>
            <p className="atual" checar={checar}>
                Sequência atual: {habito.currentSequence} dias
            </p>
            <p className="recorde">Seu recorde: {habito.highestSequence} dias</p>
            <Checkbox checar={habito.done} onClick={marcaDesmarca}>
                <img src={checkmark} />
            </Checkbox>
        </Container>
    )
}

const Container = styled.div`
    width: 340px;
    height: 94px;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    >h1{
        color: #666666;
        font-size: 20px;
        margin-bottom: 10px;
    }
    >.atual{
        color: ${props => props.checar === true ? '#8FC549' : '#666666'};
        font-size: 13px;
    }
    >.recorde{
        color: #666666;
        font-size: 13px;
    }
`

const Checkbox = styled.div`
    width: 69px;
    height: 69px;
    position: absolute;
    right: 8px;
    top: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${props => props.checar === true ? '#8FC549' : '#EBEBEB'};
`