import styled from "styled-components"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import Card from "./Card"
import { BACKGROUND_COLOR, BASE_COLOR, ACCENT_COLOR } from "../../constants/colors"

export default function TodayPage() {

    return (
        <Tela>
            <NavBar />
            <Topo>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </Topo>
            <Card/>
            <Card/>
            <Card/>
            <Footer />
        </Tela>
    )
}
const Tela = styled.div`
    padding: 30px 20px;
    width: 100%;
    min-height: 527px;
    margin: 70px 0%;
    background-color: ${BACKGROUND_COLOR};
    font-family: 'Lexend Deca', sans-serif;
`

const Topo = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    >h1{
        font-size: 23px;
        color: ${ACCENT_COLOR};
        margin: 5px 0;
    }
    >h2{
        font-size: 18px;
        color: #BABABA;
    }
`