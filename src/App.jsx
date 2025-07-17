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
import Giftbath from "./Components/Giftbath"
import Giftskincare from "./Components/Giftskincare"
import Giftminiset from "./Components/Giftminiset"
import Giftselfcare from "./Components/Giftselfcare"
import Heritage from "./Components/Heritage"
import Ingredients from "./Components/Ingredients"
import ClinicallTested from "./Components/ClinicallTested"
import OurStory from "./Components/OurStory"
import CreatedConsciously from "./Components/CreatedConsciously"
import Blogs from "./Components/Blogs"
import Search from "./Components/Search"
import FAQ from "./Components/FAQ"
import Contact from "./Components/Contact"
import Wishlist from "./Components/Wishlist"
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"
import PrivacyPolicy from "./Components/PrivacyPolicy"
import TermsConditions from "./Components/TermsConditions"
import ReturnPolicy from "./Components/ReturnPolicy"
import DeliveryInfo from "./Components/DeliveryInfo"
import WhatDifferent from "./Components/WhatDifferent"
import Login from "./Components/Login"
import EnterOTP from "./Components/EnterOTP"
import AccountDetails from "./Components/AccountDetails"


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
   <Route path="/Gift-bathbox" element={<Giftbath/>}/>
   <Route path="/Gift-skincare" element={<Giftskincare/>}/>
   <Route path="/Gift-miniset" element={<Giftminiset/>}/>
   <Route path="/Gift-selfcare" element={<Giftselfcare/>}/>
   <Route path="/our-heritage" element={<Heritage/>}/>
   <Route path="/know-our-ingredients" element={<Ingredients/>}/>
   <Route path="/clinical-testing" element={<ClinicallTested/>}/>
   <Route path="/Our-Story" element={<OurStory/>}/>
   <Route path="/Creation" element={<CreatedConsciously/>}/>
   <Route path="/Blogs" element={<Blogs/>}/>
   <Route path="/Search" element={<Search/>}/>
   <Route path="/FAQ" element={<FAQ/>}/>
   <Route path="/Contact" element={<Contact/>}/>
   <Route path="/Wishlist" element={<Wishlist/>}/>
  <Route path="/Checkout" element={<Checkout/>}/>
  <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
  <Route path="/Terms&Conditions" element={<TermsConditions/>}/>
  <Route path="/Returnpolicy" element={<ReturnPolicy/>}/>
  <Route path="/DeliveryInfo" element={<DeliveryInfo/>}/>
  <Route path="/What's-different" element={<WhatDifferent/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/EnterOTP" element={<EnterOTP/>}/>
  <Route path="/AccountDetails" element={<AccountDetails/>}/>
   </Routes>
<Cart/>
   <FooterContact/>
   <FooterSection/>
    </>
  )
}

export default App
