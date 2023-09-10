import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Header from "./Header.jsx"
import Prayer from "./components/Prayer.jsx"
import Events from "./components/Events.jsx"
import StaffVolunteerLog from "./components/StaffVolunteerLog.jsx"
import { ApiContext } from "./ApiContext.jsx"
import Admin from "./components/Admin.jsx"
import Ministries from "./components/Ministries.jsx"
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App(){
const {user}= React.useContext(ApiContext)

const token = user.token

    return(
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={ token? <Navigate to="/" /> :  <StaffVolunteerLog />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/admin" element={<ProtectedRoute>
            <Admin />
          </ProtectedRoute>} />
        </Routes>
        </BrowserRouter>
    )
}