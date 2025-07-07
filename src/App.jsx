import HeroSection from "./Components/HeroSection"
import "./App.css"

import FooterContact from "./Components/Footer-Contact"
import FooterSection from "./Components/FooterSection"
import Home from "./Components/Home"
import { Route, Routes } from "react-router-dom"
import Bath from "./Components/Bath"


function App() {
  

  return (
    <>

   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/Bath-view-all" element={<Bath/>} />
   </Routes>

   <FooterContact/>
   <FooterSection/>
    </>
  )
}

export default App
