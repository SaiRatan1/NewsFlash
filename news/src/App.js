import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Heading from './components/heading'
import './App.css'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './components/card'
import Finance from './components/finance'
import Sports from './components/sports'
import Entertainment from './components/entertainment'
import Weather from './components/weather'
import Morenews from './components/morenews'
import Catnews from './components/catnews'
import Homepage from './components/homepage'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<><Navbar />
        <Heading />
        <Card/>
        <Homepage/>
        </>}/>
        <Route exact path='/news' element={<Morenews/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
