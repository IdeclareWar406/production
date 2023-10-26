import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import Header from './components/Header'
import { ApiContext } from './ApiContext'
import Representatives from './components/Representatives'
export default function App(){

    const {user} = React.useContext(ApiContext)

    return(
        <>
       <BrowserRouter>
       <Header user={user} />
        <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/reps' element={<Representatives />} />
        </Routes>
       </BrowserRouter>
        </>
    )
}