import { ImMail4 } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import SocialMediaLink from './SocialMediaLink'
import styled from 'styled-components'

const SocialMediaLinks = () => {
    return (
        <div className=''>
            <IconsWrapper>
                <SocialMediaLink
                    Icon={FaGithub}
                    href='https://github.com/Madi-S'
                    title='github-link'
                />
                <SocialMediaLink
                    Icon={FaFacebook}
                    href='https://facebook.com/'
                    title='facebook-link'
                />
                <SocialMediaLink
                    Icon={ImMail4}
                    href='mailto:khovansky99@gmail.com'
                    title='gmail-link'
                />
            </IconsWrapper>
        </div>
    )
}

const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
`

export default SocialMediaLinks
