import React from 'react'
import { ApiContext } from './ApiContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import UserPage from './components/UserPage'
import Admin from './components/Admin'
import './index.css'
import ProtectedRoute from './components/ProtectedRoute'
export default function App(){
const {user} = React.useContext(ApiContext)



    return(
       <BrowserRouter>
       <Header />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={user.token? <Navigate to='/'/> : <UserPage />} />
        <Route path='/admin' element={<ProtectedRoute>
            <Admin />
        </ProtectedRoute>} />
        </Routes>
       </BrowserRouter>
    )
}