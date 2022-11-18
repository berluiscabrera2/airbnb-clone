import React from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    //BEM
    <div className='app'>
        <Header/>
        <Home/>
        <Footer />
        {/*Home*/}
        

            {/*Header*/}

            {/*Banner*/}
                {/*Search*/}

            {/*Card*/}

            {/*Footer*/}
        
        {/*Search Page*/}
    </div>
  )
}

export default App