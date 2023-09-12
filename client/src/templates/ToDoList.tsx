import { styled } from "styled-components";
import { useState, useEffect, useRef, useCallback } from 'react'
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const Container = styled.div`
    background-color: #e2e2e2;
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
`

const Mydiv = styled.div`
:root {
    font-family: sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }
  
  a {
    font-family: sans-serif;
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }
  
  body {
    font-family: sans-serif;
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
  
  h1 {
    font-family: sans-serif;
    font-size: 3.2em;
    line-height: 1.1;
  }

  strong {
    te
  }

  .containerDiv {
    padding: 1vw 2vw 2vw 2vw;
    background-color: white;
    display: grid;
    place-content: center;
  }
  
  span {
    padding: 1vw;
  }
  
  .btDelete {
    font-family: sans-serif;
    border-radius: 8px;
    padding: 0.45em 1.2em;
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  .btDelete:hover {
    border-color: #ff1717;
  }
  .btDelete:focus,
  .btDelete:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  .btEdit {
    font-family: sans-serif;
    border-radius: 8px;
    padding: 0.45em 1.2em;
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  .btEdit:hover {
    border-color: #164dff;
  }
  .btEdit:focus,
  .btEdit:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  .btAdd {
    font-family: sans-serif;
    border-radius: 8px;
    padding: 0.45em 1.2em;
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  .btAdd:hover {
    border-color: #00ff15;
  }
  .btAdd:focus,
  .btAdd:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  .btDelete {
    background-color: #ff9a9ad5;
  }

  .btEdit {
    background-color: #819effd3;
  }

  .btAdd {
    background-color: #a4ff8dd5;
  }

  section {
    padding: 0.5vw;
  }
  
  input {
    border-radius: 10px;
    padding: 0.6vw;
    border: 1px solid black;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
  `

export default function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const firstR = useRef(true)
  const [input, setInput] = useState("")
  const [tarefas, setTarefas] = useState<string[]>([])

  const [editarTarefa, setEditarTarefa] = useState({
    enabled: false,
    tarefa: ''
  })

  useEffect(() => {
    const tarefaSalva = localStorage.getItem("@cursoreact")
    if(tarefaSalva){
      setTarefas(JSON.parse(tarefaSalva))
    }
  }, [])

  useEffect(() => {
    if(firstR.current){
      firstR.current=false
      return
    }
    localStorage.setItem("@cursoreact", JSON.stringify(tarefas))
    console.log("useEffect usado")
  }, [tarefas])


  const registrar = useCallback() {
    if (!input) {
      alert("Preencha o nome da sua tarefa")
      return;
    }

    if (editarTarefa.enabled) {
      editarTarefaSalva();
      return;
    }

    setTarefas(tarefas => [...tarefas, input])
    setInput("")
  }

  function editarTarefaSalva() {
    const findIndexTarefa = tarefas.findIndex(tarefas => tarefas === editarTarefa.tarefa)
    const todasTarefas = [...tarefas];

    todasTarefas[findIndexTarefa] = input;
    setTarefas(todasTarefas);
    setEditarTarefa({
      enabled: false,
      tarefa: ''
    })
    setInput("")
  }

  function excluir(item: string) {
    const excluirTarefa = tarefas.filter(tarefas => tarefas !== item)
    setTarefas(excluirTarefa)
  }
  function editar(item: string) {
    inputRef.current?.focus();
    setInput(item)
    setEditarTarefa({
      enabled: true,
      tarefa: item
    })
  }

  return (
    <Container>
      <Mydiv>
        <div className="containerDiv">

          <h1>Lista de tarefas</h1>

          <input
            placeholder="Digite uma tarefa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
          />
          <button className="btAdd" onClick={registrar}>{editarTarefa.enabled ? "Atualizar tarefa" : "Adicionar Tarefa"}</button>
          <hr />

          <text>Você tem <strong>{tarefas.length}</strong> tarefas</text>

          {tarefas.map((item) => (
            <section key={item}>
              <span>{item}</span>
              <button className="btDelete" onClick={() => excluir(item)}>Excluir</button>
              <button className="btEdit" onClick={() => editar(item)}>Editar</button>
            </section>

          ))}
        </div>
      </Mydiv>
    </Container>
  )
}