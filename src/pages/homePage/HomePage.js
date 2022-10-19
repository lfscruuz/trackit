import styled from "styled-components"
import imagem_principal from '/home/didibaiano/Desktop/Projetos Driven/projeto11-trackit/src/assets/images/Group_8.png'
import { BACKGROUND_COLOR } from "../../constants/colors"

export default function HomePage() {
    return (
        <Tela>
            <Imagem src={imagem_principal}></Imagem>
            <form>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="senha"></input>
                <button>Entrar</button>
                <a>Não tem uma conta? Cadastre-se!</a>
            </form>
            
        </Tela>
    )
}

const Tela = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px;
    >form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    >form >input{
        display: flex;
        align-items: center;
        padding-left: 5px;
        margin-bottom: 5px;
        border: solid 1px #D4D4D4;
        border-radius: 5px;
        font-size: 20px;
        width: 303px;
        height: 45px;
        ::placeholder{
            color: #DBDBDB;
        }
    }
    >form >button{
        border: none;
        border-radius: 5px;
        background-color: #52B6FF;
        width: 303px;
        height: 45px;
        margin-bottom: 25px;
        font-size: 20px;
        color: white;
    }
    >form >a{
        font-size: 14px;
        color: #52B6FF;
        text-decoration: underline;
    }
`

const Imagem = styled.img`
    width: 180px;
    margin: 64px 0 35px 0;
`