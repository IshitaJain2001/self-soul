import HeroSection from "./Components/HeroSection"
import "./App.css"

import FooterContact from "./Components/Footer-Contact"
import FooterSection from "./Components/FooterSection"
import Home from "./Components/Home"
import { Route, Routes } from "react-router-dom"
import Bath from "./Components/Bath"
import Bathsoap from "./Components/Bathsoap"
import Bathsalts from "./Components/Bathsalts"
import Bathoils from "./Components/Bathoils"
import Bathscrubs from "./Components/Bathscrubs"
import Bathfizz from "./Components/Bathfizz"
import Bathsoak from "./Components/Bathsoak"
import Bathpowder from "./Components/Bathpowder"
import Faceviewall from "./Components/Faceviewall"
import Facewash from "./Components/Facewash"
import Facescrubs from "./Components/Facescrubs"
import Giftviewall from "./Components/Giftviewall"


function App() {
  

  return (
    <>

   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/Bath-view-all" element={<Bath/>} />
    <Route path="/Bath-soaps" element={<Bathsoap/>}/>
    <Route path="/Bath-salts" element={<Bathsalts/>}/>
    <Route path="/Bath-oils" element={<Bathoils/>}/>
    <Route path="Bath-scrubs" element={<Bathscrubs/>}/>
    <Route path="/Bath-fizz" element={<Bathfizz/>}/>
    <Route path="/Bath-soaks" element={<Bathsoak/>}/>
    <Route path="/Bath-powder" element={<Bathpowder/>}/>
<Route path="/Face-view-all"element={<Faceviewall/>} />
<Route path="/Facewash" element={<Facewash/>}/>
<Route path="/Facescrubs" element={<Facescrubs/>}/>
   <Route path="Gift-view-all" element={<Giftviewall/>}/> 
   </Routes>

   <FooterContact/>
   <FooterSection/>
    </>
  )
}

export default App
