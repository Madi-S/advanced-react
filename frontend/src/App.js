import React from 'react'
import Footer from './components/common/Footer/Footer'
import Navbar from './components/common/Navbar/Navbar'
import './index.scss'

function App() {
    return (
        <div className='app'>
            <Navbar />
            <main data-testid='main'>Main</main>
            <Footer />
        </div>
    )
}

export default App
