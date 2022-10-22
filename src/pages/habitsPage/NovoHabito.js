import Botao from "./Botao";
import styled from "styled-components"
import { BACKGROUND_COLOR, BASE_COLOR, ACCENT_COLOR } from "../../constants/colors";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../constants/Context";

export default function NovoHabito({ setNovoHabito, dias, enviou, setEnviou }) {

    const { user } = useContext(UserContext);
    const [nomeDoHabito, setNomeDoHabito] = useState('');
    const [listaDias, setListaDias] = useState([]);
    const [carregou, setCarregou] = useState(true)
    const [seleciona, setSeleciona] = useState('')
    const dia = [];
    const habito = {
        name: '',
        days: [1, 3, 5]
    };

    useEffect(() =>{
        setListaDias(dia)
        console.log(listaDias)
    }, [])

    function mandar(e) {
        e.preventDefault()
        habito.name = nomeDoHabito
        habito.days = dia
        axios.post(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habito,
            {
                headers: {
                    authorization: `Bearer ${user.token}`
                }
            }
        )
        .then((res) => {
            setEnviou(!enviou)
            setNovoHabito(false)
            setCarregou(false)
            setSeleciona(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
            if (err.response.status === 422) {
                alert('o campo "nome do hábito" não pode ficar vazio')
            }
        })
    }

    return (
        <Habito>
            <form>
                <input type='text' placeholder="nome do hábito" onChange={(e) => {
                    setNomeDoHabito(e.target.value)

                }} />
                {dias.map((d, i) => {
                    return (
                        <Botao d={d} key={i} i={i} listaDias={listaDias} setListaDias={setListaDias} dia={dia}></Botao>
                    )
                })}
                <div className="botoes">
                    <a onClick={() => setNovoHabito(false)}>Cancelar</a>
                    <button className="salvar" onClick={(e) => mandar(e)} >Salvar</button>
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