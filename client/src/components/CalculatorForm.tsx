import { styled } from "styled-components";
import { useState, FormEvent } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


//====================================================================>

interface resultadoP {
    titulo: string;
    gasolina: string | number;
    alcool: string | number;
}

//====================================================================>

function App() {
    const [gasolinaInput, setGasolinaInput] = useState(0)
    const [alcoolInput, setAlcoolInput] = useState(0)
    const [resultado, setResultado] = useState<resultadoP>()


    function calculo(event: FormEvent) {
        event.preventDefault();
        let conta = (alcoolInput / gasolinaInput)
        console.log(conta)

        if (conta <= 0.7) {
            setResultado({
                titulo: "Compensa usar álcool",
                gasolina: formataMoeda(gasolinaInput),
                alcool: formataMoeda(alcoolInput)
            })
        } else {
            setResultado({
                titulo: "Compensa usar gasolina",
                gasolina: formataMoeda(gasolinaInput),
                alcool: formataMoeda(alcoolInput)
            })
        }
    }


    function formataMoeda(valor: number) {
        let valorFormatado = valor.toLocaleString("pt-br",
            {
                style: "currency",
                currency: "BRL"
            })
        return valorFormatado;
    }

    //====================================================================>

    const MyForm = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Hind+Madurai:wght@300;700&display=swap');

    font-family: 'Anton', sans-serif;
    font-family: 'Hind Madurai', sans-serif;
    border: 1px solid s#D4D4D4;
    box-shadow: 1px 1px 1px -1px #2929297c;
    font-size: 1.5rem;
    display: inline-block;
    color: #1f1f1f;
    place-content: center;

    * {
        box-sizing: border-box;
    }
    
    .container {
        padding: 2rem;
        background-color: #FFFFFF;
        align-items: center;

        .title {
            margin-bottom: 2rem;

            h1, h2 {
                line-height: 1em;
                margin: 0;
                padding: 0;
            }

            h2 {
                font-size: 60%;
                color: #323232;
                font-weight: 300;
                margin-top: 1rem
            }
        }

        .input {
            margin-block: 1rem;

            * { 
                color: #5d5d5d;
            }

            label {
                display: block;
                font-size: 50%;
            }

            input {
                font-size: 90%;
                border: 0;
                border-bottom: 1px solid #D4D4D4;
                outline: none;
                width: 100%;
                padding: .5rem;
            }
        }

        .action {
          display: flex;
          justify-content: center;
          > * {
            flex-grow: 1;
          }
        }

        .logo {
            width: 5%;
        }
    }

    .sign-up {
        background-color: #f3f3f3;
        padding: 2rem;
        color: #a4a4a4;
        font-size: 75%;

        a {
            color: #ec017e;
            text-decoration: none;
        }
    }

    .txtEntrar {
        text-decoration: none;
        color: #4d4d4d;
    }
`

    const AccentButton = styled.button`
    border: 3px solid #01c52c;
    color: #ec017e;
    background-color: transparent;
    font-size: 1.25rem;
    padding: 0rem 1rem 0rem 1rem;
    border-radius: 5px;
    cursor: pointer;
`

    const HiddenButton = styled.button`
    border: 0 none;
    color: #222222;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
`

    //====================================================================>

    return (
        <MyForm>
            <div className="container">
                <div className="input">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <h3>Qual a melhor opção?</h3>
                    <label>Gasolina (Valor por litro)</label>
                    <input 
                        type="number" 
                        placeholder="ex.: 4.99" name="alcool"
                        value={gasolinaInput}
                        onChange={(e) => setGasolinaInput(Number(e.target.value))} />
                </div>
                <form className="form" onSubmit={calculo}>
                    <div className="input">
                        <label>Alcool (Valor por litro)</label>
                        <input 
                        type="number" 
                        placeholder="ex.: 4.99" name="alcool" 
                        value={alcoolInput}
                        onChange={(e) => setAlcoolInput(Number(e.target.value))}
                        />
                    </div>
                    <div className="action">
                        <AccentButton></AccentButton>
                        <HiddenButton>Esqueci minha senha!</HiddenButton>
                    </div>
                </form>
            </div>
        </MyForm>
    )
}
export default App