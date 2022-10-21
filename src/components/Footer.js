import styled from "styled-components"
import { BASE_COLOR } from "../constants/colors"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";

export default function Footer() {
    const percentage = 80;
    return (
        <Base>
            <a>Hábitos</a>
            <Hoje
                value={percentage}
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
            <a>Histórico</a>
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
    >a{
        color: ${BASE_COLOR};
    }
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