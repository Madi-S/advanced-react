import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/main/Footer/Footer'
import Navbar from './components/main/Navbar/Navbar'
import AcceptCookies from './components/common/AcceptCookies/AcceptCookies'
import './index.scss'

function App() {
    return (
        <Router>
            <div className='app'>
                <Navbar />
                <main data-testid='main'>
                    <Switch>
                        <Route path='/' exact>
                            Index page
                        </Route>
                    </Switch>
                </main>
                <Footer />
                <AcceptCookies />
            </div>
        </Router>
    )
}

export default App
