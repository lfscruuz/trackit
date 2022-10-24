import { useState } from "react"
import styled from "styled-components"


export default function Botao({d, i, dia, seleciona, carrega}){
    const [selecionarBotao, setSelecionarBotao] = useState(false)

    function ativaDesativa(e){
        e.preventDefault()
        if (selecionarBotao){
            setSelecionarBotao(false)
            dia.pop(i)
        } else{
            setSelecionarBotao(true)
            dia.push(i)
        }
    }
    return (
        <Dia disabled={carrega} onClick={(e) => ativaDesativa(e)} selecionarBotao={selecionarBotao} className="dia">{d}</Dia>
    )
}

const Dia = styled.button`
    width: 30px;
    height: 30px;
    border: solid 1px #D4D4D4;
    border-radius: 5px;
    margin-right: 5px;
    background-color: ${props => props.selecionarBotao === false ? '#fff' : '#CFCFCF'};
    color: ${props => props.selecionarBotao === false ? '#DBDBDB' : '#fff'};
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`