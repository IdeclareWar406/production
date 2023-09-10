import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApiContextProvider} from "./ApiContext"
import App from "./App.jsx"

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<ApiContextProvider>
    <App />
</ApiContextProvider>)
