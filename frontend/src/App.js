import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/main/Footer/Footer'
import Navbar from './components/main/Navbar/Navbar'
import AcceptCookies from './components/common/AcceptCookies/AcceptCookies'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import FeedbackPage from './pages/FeedbackPage'
import CoursesPage from './pages/CoursesPage'

import './index.scss'

function App() {
    return (
        <Router>
            <div className='app'>
                <Navbar />
                <main data-testid='main'>
                    <Switch>
                        <Route path='/' exact>
                            <IndexPage />
                        </Route>
                        <Route path='/feedback' exact>
                            <FeedbackPage />
                        </Route>
                        <Route path='/login' exact>
                            <LoginPage />
                        </Route>
                        <Route path='/register' exact>
                            <RegisterPage />
                        </Route>
                        <Route path='/courses' exact>
                            <CoursesPage />
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
