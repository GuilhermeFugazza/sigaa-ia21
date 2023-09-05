import { styled } from "styled-components";
import { Link } from "react-router-dom"
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const Container = styled.div`
    background-color: #d1d1d1;
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
    overflow: hidden;

    &::after {
        content: " ";
        background-color: #5efaff78;
        width: 90%;
        height: 100%;
        position: absolute;
        right: 0;
        z-index: 1;
        transform: skew(15deg) translateX(50%);
        box-shadow: -5px -5px 10px #000000;
    }

    > * {
        position: relative;
        z-index: 9;
    }

    .divButton{
        padding: 1vw;
        outline: none;
    }
`
const AccentButton = styled.button`
    border: 3px solid #01c52c;
    color: #ec017e;
    background-color: #66c266;
    font-size: 1.25rem;
    padding: 0rem 1rem 0rem 1rem;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    padding: 1vw;
`

export default () => <>
    <Container>
        <div className="divButton">
            <AccentButton><Link to="/calculator" className="txtEntrar">Calculator</Link></AccentButton>
        </div>
        <div className="divButton"> 
            <AccentButton><Link to="/todolist" className="txtEntrar">ToDoList</Link></AccentButton>
        </div>
    </Container>
</>