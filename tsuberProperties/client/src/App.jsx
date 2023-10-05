import React from 'react'
import { ApiContext } from './ApiContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import './index.css'
export default function App(){
const {user} = React.useContext(ApiContext)



    return(
       <BrowserRouter>
       <Header />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        </Routes>
       </BrowserRouter>
    )
}