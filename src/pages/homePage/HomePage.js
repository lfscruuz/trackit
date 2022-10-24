import styled, { ThemeConsumer } from "styled-components"
import imagem_principal from '/home/didibaiano/Desktop/Projetos Driven/projeto11-trackit/src/assets/images/Group_8.png'
import { BASE_COLOR } from "../../constants/colors"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useContext } from "react"
import UserContext from "../../constants/Context"
import { ThreeDots } from 'react-loader-spinner'


export default function HomePage() {
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carrega, setCarrega] = useState(false)
    const navigate = useNavigate()
    const login = {
        email: '',
        password: ''
    }

    function envia(e) {
        e.preventDefault();
        setCarrega(true)
        login.email = email;
        login.password = senha;
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', login)
            .then((res) => {
                navigate('/hoje')
                setUser(res.data)
                setCarrega(false)
            })
            .catch((err) => {
                console.log(err.response.status)
                setCarrega(false)
                if(err.response.status === 422){
                    alert('campos não podem ficar vazios')
                }
                if(err.response.status === 401){
                    alert('Usuário e/ou senha inválidos!')
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
                <button className="botao-enviar" onClick={(e) => envia(e)}>{carrega === false ? 'Entrar' :
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
    >form >.botao-enviar{
        border: none;
        border-radius: 5px;
        background-color: ${BASE_COLOR};
        width: 303px;
        height: 45px;
        margin-bottom: 25px;
        font-size: 20px;
        color: white;
        position: relative;
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