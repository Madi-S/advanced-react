
const SocialMediaLink = ({ Icon, href = '', title='', color = 'white', size = '1.8em' }) => {
    return (
        <a href={href}>
            <Icon className='footer__icon' title={title} color={color} size={size} />
        </a>
    )
}



export default SocialMediaLink
