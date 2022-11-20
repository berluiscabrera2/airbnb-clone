import React from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    //BEM
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route exact path='/search' element={<SearchPage/>}/>
          <Route exact path='/' element={<Home />}/>
        </Routes>
        <Footer />
      </div>
    </Router>

  )
}

export default App
