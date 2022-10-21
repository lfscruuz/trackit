import { useState } from "react"
import styled from "styled-components"


export default function Botao({d}){
    const [selecionarBotao, setSelecionarBotao] = useState(false)
    function ativaDesativa(){
        if (selecionarBotao === true){
            setSelecionarBotao(false)
        } else{
            setSelecionarBotao(true)
        }
    }
    return (
        <Dia onClick={ativaDesativa} selecionarBotao={selecionarBotao}className="dia">{d}</Dia>
    )
}

const Dia = styled.div`
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