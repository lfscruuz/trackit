import { useState } from "react"
import styled from "styled-components"
import checkmark from '../../assets/images/check.svg'


export default function Card(){

    const [checar, setChecar] = useState(false)

    function marcaDesmarca(){
        if (checar === false){
            setChecar(true)
        } else{
            setChecar(false)
        }
    }

    return(
        <Container>
            <h1>Ler 1 capítulo de livro</h1>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
            <Checkbox checar={checar} onClick={marcaDesmarca}>
                <img src={checkmark}/>
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
    >p{
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