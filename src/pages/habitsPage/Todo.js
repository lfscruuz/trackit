import styled from "styled-components"
import Botao from "./Botao"
import bin from '../../assets/images/Vector.svg'

export default function Todo() {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
        <Card>
            <p>Ler 1 capítulo de livro</p>
            <img src={bin}/>
            <Botoes>
                {dias.map((d, i) => {
                    return (
                        <Botao d={d} key={i}></Botao>
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