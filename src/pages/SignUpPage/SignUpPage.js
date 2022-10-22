import styled from "styled-components"
import imagem_principal from '/home/didibaiano/Desktop/Projetos Driven/projeto11-trackit/src/assets/images/Group_8.png'
import { BASE_COLOR } from "../../constants/colors"
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import UserContext from "../../constants/Context"


export default function SignUpPage() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext);
    const cadastro = {
        email: '',
        name: '',
        image: '',
        password: ''
    }
    
    function enviar(e){
        e.preventDefault();
        cadastro.email = email;
        cadastro.name = nome;
        cadastro.image = foto;
        cadastro.password = senha;
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', cadastro)
        .then((res) =>{
            console.log(cadastro)
            navigate('/')
            
        })
        .catch((err) =>{
            console.log(err.response.status)
            if(err.response.status === 409){
                alert('usuário já cadastrado')
            }
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
                <input type='text' placeholder="nome" onChange={(e) => {
                    setNome(e.target.value)
                    }}></input>
                <input type='url' placeholder="foto" onChange={(e) => {
                    setFoto(e.target.value)
                    }}></input>
                <button onClick={(e) => enviar(e)}>Cadastrar</button>
                <Link to='/'>
                    <a>Já tem uma conta? Faça o login!</a>
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