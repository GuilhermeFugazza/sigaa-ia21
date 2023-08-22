import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './templates/Calculator.tsx'
import Login from './templates/Login.tsx'
import NotFound from './templates/NotFound.tsx'
import SignUp from './templates/SignUp.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/home' Component={Home} />
        <Route path='/signup' Component={SignUp} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)