import { logoSrc } from './srcs'

const NavLogo = () => {
    return (
        <img
            alt='logo'
            data-testid='navbar-logo'
            className='nav__logo'
            src={logoSrc}
        />
    )
}

export default NavLogo
