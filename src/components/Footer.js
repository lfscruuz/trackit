import styled from "styled-components"
import { BASE_COLOR } from "../constants/colors"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../constants/Context";


export default function Footer() {

    
    const { progress, setProgress, qtdHabitos, concluido } = useContext(UserContext);

    useEffect(() => {
        let calculo = 0;
        if (qtdHabitos !== 0){
            calculo = Math.ceil((concluido / qtdHabitos) * 100)
        }

        setProgress(calculo)
        console.log(concluido)
        console.log(calculo)
    }, [concluido, qtdHabitos])

    const percentage = 80;
    return (
        <Base>
            <Link to='/habitos'>
                <EstiloP>Hábitos</EstiloP>
            </Link>

            <Hoje
                value={progress}
                text='Hoje'
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: `${BASE_COLOR}`,
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
            />
            <Link to='/historico'>
                <EstiloP>Histórico</EstiloP>
            </Link>

        </Base>
    )
}

const Base = styled.div`
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const EstiloP = styled.div`
    color: ${BASE_COLOR};
    text-decoration: underline;
`

const Hoje = styled(CircularProgressbar)`
    max-width: 91px;
    max-height: 91px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    >.CircularProgressbar-text {
    font-size: 18px;
    transform: translate(-18px, 6px);
    }
`