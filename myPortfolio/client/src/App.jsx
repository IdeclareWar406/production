import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home.jsx"
import Header from "./Header.jsx"
import LandingPage from "./LandingPage.jsx"
import SignUpLog from "./components/SignUpLog.jsx"
import { ApiContext } from "./ApiContext.jsx"
import Admin from "./components/Admin.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import ClientView from "./components/ClientView.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
export default function App(){
const {user} = React.useContext(ApiContext)






    return(
     <BrowserRouter>
     <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingpage" element={<LandingPage />}/>
        <Route path="/login" element={ user.token? <Navigate to='/' element={<Home />}  /> :<SignUpLog />} />
       <Route path="/admin" element={<ProtectedRoute >
        <Admin />
       </ProtectedRoute>} />
       <Route path="/profile" element={<ProtectedRoute >
        <ClientView />
       </ProtectedRoute>} />
       <Route path='/about' element={<About />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
     </BrowserRouter>
    )
}