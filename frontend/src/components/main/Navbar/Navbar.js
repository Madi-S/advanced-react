import NavLogo from './NavLogo'
import NavLinks from './NavLinks'
import NavHeading from './NavHeading'
import HamburgerMenu from './HamburgerMenu'
import styled from 'styled-components'
import './index.scss'

const Navbar = () => {
    return (
        <nav className='nav' data-testid='navbar'>
            <NavWrapper>
                <NavLogo />
                <NavHeading text='Madi-S' />
            </NavWrapper>

            <NavWrapper className='nav__links-wrapper'>
                <NavLinks />
            </NavWrapper>

            <HamburgerMenu />
        </nav>
    )
}

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
`

export default Navbar
