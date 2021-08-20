import styled from 'styled-components'

const WRAPPER_HEIGHT_PX = 600
const CONTENT_WRAPPER_TOP_PX = WRAPPER_HEIGHT_PX - 370

const BackgroundVideo = props => {
    const videoSrc = 'https://www.w3schools.com/tags/movie.mp4'

    return (
        <Wrapper>
            <VideoWrapper>
                <video
                    style={{
                        minWidth: '100%',
                        minHeight: '100%',
                        zIndex: -1
                    }}
                    autoPlay='autoplay'
                    loop='loop'
                    muted
                    className='bg-video'
                >
                    <source src={videoSrc} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </VideoWrapper>
            <ContentWrapper>{props.children}</ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: ${WRAPPER_HEIGHT_PX}px;
`
const ContentWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: ${CONTENT_WRAPPER_TOP_PX}px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const VideoWrapper = styled.div`
    z-index: -999;
    width: 100%;
    height: 100%;
`

export default BackgroundVideo
