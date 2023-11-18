import React from 'react'
import Login from './components/Login'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRotue'
import Home from "./components/Home.jsx"
import { GameContext } from './GameContext.jsx'
import CharacterCreation from './components/CharacterCreation.jsx'
export default function App(){
const {user} = React.useContext(GameContext)


    return(<>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={user.token? <Navigate to="/home" /> : <Login />} />
        <Route path='/home' element={<ProtectedRoute>
            <Home />
        </ProtectedRoute>} />
        <Route path='/characterCreation' element={<ProtectedRoute>
            <CharacterCreation />
        </ProtectedRoute>} />
    </Routes>
    </BrowserRouter>
    </>)
}