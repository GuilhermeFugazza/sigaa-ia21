import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './templates/Calculator.tsx'
import Login from './templates/Login.tsx'
import NotFound from './templates/NotFound.tsx'
import SignUp from './templates/SignUp.tsx'
import ToDoList from './templates/ToDoList.tsx'
import Home from './templates/Home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/calculator' Component={Calculator} />
        <Route path='/signup' Component={SignUp} />
        <Route path='*' Component={NotFound} />
        <Route path='/home' Component={Home} />
        <Route path='/todolist' Component={ToDoList} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)