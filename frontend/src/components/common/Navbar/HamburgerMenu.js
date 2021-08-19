import NavLinks from './NavLinks'
import { useRef } from 'react'
import styled from 'styled-components'

const NavMenuBar = styled.span`
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
`

const HamburgerMenu = () => {
    const navMenuRef = useRef()
    const navMenuToggleRef = useRef()

    const shouldHideNavMenu = () => navMenuRef.current.style.display === 'flex'

    const hideNavMenu = () => {
        navMenuRef.current.style.display = 'none'
        navMenuToggleRef.current.style.right = '1rem'
    }

    const showNavMenu = () => {
        navMenuRef.current.style.display = 'flex'
        navMenuToggleRef.current.style.right = '220px'
    }

    const toggleMenu = () => {
        if (shouldHideNavMenu()) hideNavMenu()
        else showNavMenu()
    }

    return (
        <>
            <a
                ref={navMenuToggleRef}
                onClick={toggleMenu}
                className='nav__menu-toggle'
            >
                <NavMenuBar />
                <NavMenuBar />
                <NavMenuBar />
            </a>
            <div ref={navMenuRef} className='nav__menu'>
                <NavLinks />
            </div>
        </>
    )
}

export default HamburgerMenu
