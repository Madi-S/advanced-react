import React from 'react'
import styled from 'styled-components'
import BackgroundVideo from './BackgroundVideo'
import ContentItem from './ContentItem'
import './index.scss'
import DesignNotesSvg from './../../misc/img/undraw/DesignNotes.svg'
import SiteStatsSvg from './../../misc/img/undraw/SiteStats.svg'
import DataExtractionSvg from './../../misc/img/undraw/DataExtraction.svg'

const $purple = '#8808ff'
const $pink = '#e201d9'
const $blue = '#00adff'

const IndexPage = () => {
    return (
        <div className='index'>
            <BackgroundVideo>
                <TypingEffect data-testid='index-typing-effect'>
                    I'm a <i>unique</i> backend developer
                </TypingEffect>
            </BackgroundVideo>
            <ContentWrapper className='content' data-testid='index-content'>
                <ContentItem primaryColor={$purple}>
                    <img src={DesignNotesSvg} alt='Design Notes' />
                    <ContentItemTextWrapper>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae nulla, incidunt temporibus ipsum accusantium,
                        quod necessitatibus dolorum a quo aliquid asperiores est
                        in eaque ea possimus, voluptatum dolor facilis omnis.
                    </ContentItemTextWrapper>
                </ContentItem>
                <ContentItem primaryColor={$pink}>
                    <ContentItemTextWrapper>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae nulla, incidunt temporibus ipsum accusantium,
                        quod necessitatibus dolorum a quo aliquid asperiores est
                        in eaque ea possimus, voluptatum dolor facilis omnis.
                    </ContentItemTextWrapper>

                    <img src={SiteStatsSvg} alt='Site Stats' />
                </ContentItem>
                <ContentItem primaryColor={$blue}>
                    <img src={DataExtractionSvg} alt='Data Extraction' />
                    <ContentItemTextWrapper>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae nulla, incidunt temporibus ipsum accusantium,
                        quod necessitatibus dolorum a quo aliquid asperiores est
                        in eaque ea possimus, voluptatum dolor facilis omnis.
                    </ContentItemTextWrapper>
                </ContentItem>
            </ContentWrapper>
        </div>
    )
}

const TypingEffect = styled.div`
    color: #dfdfdf;
    width: 24ch;
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

const ContentWrapper = styled.div`
`

const ContentItemTextWrapper = styled.div`
    padding: 50px;
    margin-top: 70px;
    font-size: 1.5rem;
`

export default IndexPage
