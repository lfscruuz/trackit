import Botao from "./Botao";
import styled from "styled-components"
import { BACKGROUND_COLOR, BASE_COLOR, ACCENT_COLOR } from "../../constants/colors";

export default function NovoHabito({setNovoHabito, dias}) {

    return (
        <Habito>
            <form>
                <input type='text' placeholder="nome do hábito" />
                {dias.map((d, i) => {
                    return (
                        <Botao d={d} key={i}></Botao>
                    )
                })}
                <div className="botoes">
                    <a onClick={() => setNovoHabito(false)}>Cancelar</a>
                    <button className="salvar">Salvar</button>
                </div>
            </form>
        </Habito>
    )
}

const Habito = styled.div`

    width: 100%;
    height: 180px;
    background-color: #fff;
    padding: 18px;
    margin-bottom: 29px;
    position:relative;
    
    >form{
        display: flex;
        flex-wrap: wrap;
    }
    >form >input{
        display: flex;
        align-items: center;
        padding-left: 5px;
        margin-bottom: 10px;
        border: solid 1px #D4D4D4;
        border-radius: 5px;
        font-size: 20px;
        width: 303px;
        height: 45px;
        ::placeholder{
            color: #DBDBDB;
        }
    }

    >form >.botoes{
        position: absolute;
        bottom: 13px;
        right: 13px;
    }

    >form >.botoes >a{
        color: ${BASE_COLOR};
        font-size: 16px;
        margin-right: 23px;        
    }

    >form >.botoes >.salvar{
        
        width: 84px;
        height: 35px;
        border: none;
        border-radius: 5px;
        background-color: ${BASE_COLOR};
        color: #fff;
        font-size: 16px;
    }
`