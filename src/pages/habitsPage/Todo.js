import styled from "styled-components"
import bin from '../../assets/images/Vector.svg'

export default function Todo({dias}) {

    const indices = [ 1, 3, 5]
    return (
        <Card>
            <p>Ler 1 capítulo de livro</p>
            <img src={bin}/>
            <Botoes>
                {dias.map((d, i) => {
                    return (
                        <Dia className="dia" key={i}>{d}</Dia>
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
    background-color: ${props => props.selecionarBotao === false ? '#fff' : '#CFCFCF'};
    color: ${props => props.selecionarBotao === false ? '#DBDBDB' : '#fff'};
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`