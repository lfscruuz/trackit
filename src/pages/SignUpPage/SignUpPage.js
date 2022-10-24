import styled from "styled-components"
import imagem_principal from '/home/didibaiano/Desktop/Projetos Driven/projeto11-trackit/src/assets/images/Group_8.png'
import { BASE_COLOR } from "../../constants/colors"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'


export default function SignUpPage() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const [carrega, setCarrega] = useState(false)
    const navigate = useNavigate()
    const cadastro = {
        email: '',
        name: '',
        image: '',
        password: ''
    }
    
    function enviar(e){
        e.preventDefault();
        setCarrega(true)
        cadastro.email = email;
        cadastro.name = nome;
        cadastro.image = foto;
        cadastro.password = senha;
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', cadastro)
        .then((res) =>{
            console.log(cadastro)
            navigate('/')
            setCarrega(false)
        })
        .catch((err) =>{
            setCarrega(false)
            console.log(err.response.status)
            if(err.response.status === 409){
                alert('usuário já cadastrado')
            }
            if(err.response.status === 422){
                alert('campos não podem ficar vazios')
            }
        })
    }

    return (
        <Tela>
            <Imagem src={imagem_principal}></Imagem>
            <form>
                <input type="email" placeholder="email" disabled={carrega} onChange={(e) => {
                    setEmail(e.target.value)
                    }}></input>
                <input type="password" placeholder="senha" disabled={carrega} onChange={(e) => {
                    setSenha(e.target.value)
                    }}></input>
                <input type='text' placeholder="nome" disabled={carrega} onChange={(e) => {
                    setNome(e.target.value)
                    }}></input>
                <input type='url' placeholder="foto" disabled={carrega} onChange={(e) => {
                    setFoto(e.target.value)
                    }}></input>
                <button onClick={(e) => enviar(e)}>{carrega === false ? 'Cadastrar' :
                    <ThreeDots
                        height="45"
                        width="80"
                        radius="9"
                        color="#fff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                }</button>
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
        display: flex;
        justify-content: center;
        align-items: center;
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