import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from './App.jsx'
import Hello from './components/Hello.jsx'
import About from './components/About.jsx'
import Bikaner from './components/Bikaner.jsx'
import Haldiram from './components/Haldiram.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/hello" element={<Hello />} />
      <Route path="/about" element={<About />} />
      <Route path="/bikaner" element={<Bikaner />} />
      <Route path="/haldiram" element={<Haldiram />} />
      
    </Routes>
  </BrowserRouter>
 
)
