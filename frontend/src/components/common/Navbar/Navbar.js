import NavLink from './NavLink'
import './index.scss'
import NavLogo from './NavLogo'

const Navbar = () => {
    return (
        <nav className='nav' data-testid='navbar'>
            <div className='nav__logo-wrapper'>
                <NavLogo />
            <h1 className='nav__header'>Madi-S</h1>
            </div>
            <div className='nav__links-wrapper'>
                <NavLink text='About me' to='about-me' />
                <NavLink text='Feedback' to='feedback' />
                <NavLink text='Courses' to='courses' />
                <NavLink text='Login' to='login' />
                <NavLink text='Register' to='register' />
            </div>
        </nav>
    )
}

export default Navbar
