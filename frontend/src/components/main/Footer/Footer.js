import './index.scss'
import SocialMediaLinks from './SocialMediaLinks'
import CopyrightBlock from './CopyrightBlock'

const Footer = () => {
    return (
        <footer data-testid='footer' className='footer'>
            <SocialMediaLinks />
            <hr />
            <CopyrightBlock />
        </footer>
    )
}

export default Footer
