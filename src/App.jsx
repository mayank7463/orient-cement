import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Parentage from './pages/Parentage/Parentage';
import Performance from './pages/Performance/Performance';
import ValueCreation from './pages/ValueCreation/ValueCreation';
import ChairmanMessage from './pages/ChairmanMessage/ChairmanMessage';
import MdMessages from './pages/MdMessages/MdMessages';
import Bod from './pages/Bod/Bod';
import StrongRoots from './pages/StrongRoots/StrongRoots';
import OurBrands from './pages/OurBrands/OurBrands';
import CollectiveStrength from './pages/CollectiveStrength/CollectiveStrength';
import Sustainable from './pages/Sustainable/Sustainable';
import Awards from './pages/Awards/Awards';
import CommunityDev from './pages/CommunityDev/CommunityDev';
import Homepage from './pages/HomePage/Homepage';
import AboutUs from './pages/AboutUs/AboutUs';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Sdgs from './pages/Sdgs/Sdgs';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
         <div>
                <Routes>
                      <Route path='/' element={<Homepage/>}/>
                      <Route path='/about-us' element={<AboutUs/>}/>
                      <Route path='/parentage' element={<Parentage/>}/>
                      <Route path='/md-messages' element={<MdMessages/>}/>
                      <Route path='/chairman-messages' element={<ChairmanMessage/>}/>
                      <Route path='/bod' element={<Bod/>}/>
                      <Route path='/collective-strength' element={<CollectiveStrength/>}/>
                      <Route path='/community-development' element={<CommunityDev/>}/>
                      <Route path='/awards' element={<Awards/>}/>
                      <Route path='/sustainable' element={<Sustainable/>}/>
                      <Route path='/our-brands' element={<OurBrands/>}/>
                      <Route path='/strong-roots' element={<StrongRoots/>}/>
                      <Route path='/value-creation' element={<ValueCreation/>}/>
                      <Route path='/performance' element={<Performance/>}/>
                      <Route path='/sdgs' element={<Sdgs/>}/>
                </Routes>
         </div>
      <Footer/>
      </BrowserRouter>
     </>
  )
}

export default App
