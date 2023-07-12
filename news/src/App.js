import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Heading from './components/heading'
import './App.css'

import 'react-multi-carousel/lib/styles.css';
import Card from './components/card'

import Morenews from './components/morenews'

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
