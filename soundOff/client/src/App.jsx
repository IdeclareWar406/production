import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import Header from './components/Header'
import { ApiContext } from './ApiContext'
import Representatives from './components/Representatives'
import IndividualRep from './components/IndividualRep'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './components/Admin'
export default function App(){

    const {user} = React.useContext(ApiContext)

    return(
        <>
       <BrowserRouter>
       <Header user={user} />
        <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/reps' element={<Representatives />} />
        <Route path='/reps/:id' element={<IndividualRep />} />
        <Route path='/login' element={user.token? <Navigate to='/' /> : <Login />}/>
        <Route path='/admin' element={<ProtectedRoute>
            <Admin user={user.user} />
        </ProtectedRoute>} />
        </Routes>
       </BrowserRouter>
        </>
    )
}