import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import bin from '../../assets/images/Vector.svg'
import UserContext from "../../constants/Context"


export default function Todo({ dias, nome, id, enviou, setEnviou, indiceDosDias }) {

    const { user } = useContext(UserContext);
    const indices = [1, 3, 5]
    function deletar(e) {
        e.preventDefault()
        if (window.confirm('quer mesmo deletar?') === true) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            {
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            })
            .then(() => {
                setEnviou(!enviou)
            })
        }

    }

    return (
        <Card>
            <p>{nome}</p>
            <img src={bin} onClick={(e) => deletar(e)} />
            <Botoes>
                {dias.map((d, i) => {
                    return (
                        <Dia className="dia" indiceDosDias={indiceDosDias} i={i} key={i} >{d}</Dia>
                    )
                })}
            </Botoes>

        </Card>
    )
}

const Card = styled.div`
    width: 340px;
    height: 91px;
    background-color: #fff;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    >p{
        color: #666666;
        font-size: 20px;
    }
    >img{
        width: 13px;
        position: absolute;
        right: 15px;
    }
`
const Botoes = styled.div`
    display: flex;
    margin: 8px 0;
`
const Dia = styled.div`
    width: 30px;
    height: 30px;
    border: solid 1px #D4D4D4;
    border-radius: 5px;
    margin-right: 5px;
    background-color: ${props => props.indiceDosDias.includes(props.i) ? '#CFCFCF' : '#fff'};
    color: ${props => props.indiceDosDias.includes(props.i) ? '#fff' : '#DBDBDB'};
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`