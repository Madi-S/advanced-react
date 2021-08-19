import NavLink from './NavLink'
import NavLogo from './NavLogo'
import NavHeading from './NavHeading'
import './index.scss'
import styled from 'styled-components'

const NavLogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

const NavLinksWrapper = styled.div`

`

const Navbar = () => {
    return (
        <nav className='nav' data-testid='navbar'>
            <NavLogoWrapper>
                <NavLogo />
                <NavHeading text='Madi-S' />
            </NavLogoWrapper>

            <NavLinksWrapper>
                <NavLink text='About me' to='about-me' />
                <NavLink text='Feedback' to='feedback' />
                <NavLink text='Courses' to='courses' />
                <NavLink text='Login' to='login' />
                <NavLink text='Register' to='register' />
            </NavLinksWrapper>
        </nav>
    )
}

export default Navbar
