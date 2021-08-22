import styled from 'styled-components'
import BackgroundVideo from './BackgroundVideo'
import ContentItem from './ContentItem'
import './index.scss'
import DesignNotes from './../../misc/img/undraw/DesignNotes.svg'
import SiteStats from './../../misc/img/undraw/SiteStats.svg'
import DataExtractionSvg from './../../misc/img/undraw/DataExtraction.svg'

const $purple = '#8808ff'
const $pink = '#e201d9'
const $blue = '#00adff'

const IndexPage = () => {
    return (
        <>
            <BackgroundVideo>
                <TypingEffect data-testid='index-typing-effect'>
                    I'm a <i>unique</i> web developer
                </TypingEffect>
            </BackgroundVideo>
            {/* <ContentWrapper className='content' data-testid='index-content'>
                <ContentItem
                    primaryColor={$purple}
                    illustrationSrc={DataExtractionSvg}
                />
                <ContentItem
                    primaryColor={$pink}
                    illustrationSrc={DesignNotes}
                />
                <ContentItem
                    primaryColor={$blue}
                    illustrationSrc={SiteStats}
                />
            </ContentWrapper> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat asperiores perferendis, hic iste alias necessitatibus molestias, magnam molestiae doloribus nemo officia quis labore veniam beatae rerum voluptatum commodi quo.</p>
        </>
    )
}

const TypingEffect = styled.div`
    color: #dfdfdf;
    width: 21ch;
    animation: typing 3.2s steps(24), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: 'Oswald', sans-serif;
    font-size: 6vw;
    word-wrap: break-word;

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

const ContentWrapper = styled.div``

export default IndexPage
