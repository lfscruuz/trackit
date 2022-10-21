import styled from "styled-components"
import imagem_principal from '/home/didibaiano/Desktop/Projetos Driven/projeto11-trackit/src/assets/images/Group_8.png'
import { BASE_COLOR } from "../../constants/colors"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

export default function HomePage() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()
    const login = {
        email: '',
        password: ''
    }

    function envia (e){
        e.preventDefault();
        login.email = email;
        login.password = senha;
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', login)
        .then(() =>{
            console.log(login)
            navigate('/habitos')
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <Tela>
            <Imagem src={imagem_principal}></Imagem>
            <form>
                <input type="email" placeholder="email" onChange={(e) => {
                    setEmail(e.target.value)
                    }}></input>
                <input type="password" placeholder="senha" onChange={(e) => {
                    setSenha(e.target.value)
                    }}></input>
                <button onClick={(e) => envia(e)}>Entrar</button>
                <Link to='/cadastro'>
                    <a>Não tem uma conta? Cadastre-se!</a>
                </Link>
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
        background-color: ${BASE_COLOR};
        width: 303px;
        height: 45px;
        margin-bottom: 25px;
        font-size: 20px;
        color: white;
    }
    >form >a{
        font-size: 14px;
        color: ${BASE_COLOR};
        text-decoration: underline;
    }
`

const Imagem = styled.img`
    width: 180px;
    margin: 64px 0 35px 0;
`