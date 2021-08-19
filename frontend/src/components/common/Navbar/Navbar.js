import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import NavHeading from './NavHeading'
import HamburgerMenu from './HamburgerMenu'
import styled from 'styled-components'
import './index.scss'

const NavLogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Navbar = () => {
    return (
        <nav className='nav' data-testid='navbar'>
            <NavLogoWrapper>
                <NavLogo />
                <NavHeading text='Madi-S' />
            </NavLogoWrapper>

            <div className='nav__links-wrapper'>
                <NavLinks />
            </div>

            <HamburgerMenu />
        </nav>
    )
}

export default Navbar
