import styled from 'styled-components'
import BackgroundVideo from './BackgroundVideo'
import './index.scss'

const IndexPage = () => {
    return (
        <BackgroundVideo>
            <TypingEffect>I'm a unique web developer</TypingEffect>
        </BackgroundVideo>
    )
}

const TypingEffect = styled.div`
    color: #e201d9;
    width: 20ch;
    animation: typing 3.2s steps(24), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: 'Oswald', sans-serif;
    font-size: 6rem;

    @keyframes typing {
        from {
            width: 0;
        }
    }

    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }
`

export default IndexPage
