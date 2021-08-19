import React from 'react'
import Footer from './components/main/Footer/Footer'
import Navbar from './components/main/Navbar/Navbar'
import AcceptCookies from './components/common/AcceptCookies/AcceptCookies'
import './index.scss'

function App() {
    return (
        <div className='app'>
            <AcceptCookies />
            <Navbar />
            <main data-testid='main'>Main</main>
            <Footer />
        </div>
    )
}

export default App
