import NavLink from './NavLink'

const NavLinks = () => {
    return (
        <>
            <NavLink text='About me' to='about-me' />
            <NavLink text='Feedback' to='feedback' />
            <NavLink text='Courses' to='courses' />
            <NavLink text='Login' to='login' />
            <NavLink text='Register' to='register' />
        </>
    )
}

export default NavLinks
