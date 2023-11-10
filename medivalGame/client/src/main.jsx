import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {GameContextProvider} from "./GameContext.jsx"

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(<GameContextProvider>
    <App />
</GameContextProvider>)
