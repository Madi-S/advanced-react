const NavLink = ({ onClick, text, to }) => {
    const currEdnpoint = 'about-me'
    
    let disabled = false
    let className = 'nav__link'

    if (to === currEdnpoint) {
        className = 'nav__link nav__link-active'
        disabled = true
    }

    return (
        <button
            data-testid='navbar-link'
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

NavLink.defaultProps = {
    onClick: console.log,
    text: 'Click me',
    to: '/'
}

export default NavLink
