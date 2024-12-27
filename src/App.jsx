import "./app.scss"
import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolioo/Portfolio"
import Contact from "./components/contact/Contact"
import Cursor from "./components/cursor/Cursor"
import Home from "./components/home/Home"



function App() {


    return <BrowserRouter>
    
    <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path="/hero" element={<Hero />}/> 
            <Route path="/services"element={<Services />}/>
            <Route path="/portfolioo"element={<Portfolio />}/>
            <Route path="/contact"element={<Contact />}/>
            </Routes>
    
      </BrowserRouter>
      

 }

export default App


