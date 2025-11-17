import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // This is now your WarriorWit code
import './index.css'     // This imports Tailwind's styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)