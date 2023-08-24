import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Header from "./Header.jsx"
import Prayer from "./components/Prayer.jsx"
import Events from "./components/Events.jsx"

export default function App(){



    return(
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        </BrowserRouter>
    )
}