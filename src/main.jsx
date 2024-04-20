import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About.jsx'
import RegisterPage from './Components/Register.jsx'
import NotFoundPage from './Components/RedirectPage.jsx'
import AmbassadorsPage from './Components/AmbassadorsPage.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/ambassadors" element={<AmbassadorsPage/>} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
