import styled from 'styled-components'
import Video from './../../misc/video/coding.mp4'

const WRAPPER_HEIGHT_PX = 600
const CONTENT_WRAPPER_TOP_PX = WRAPPER_HEIGHT_PX - 370

const BackgroundVideo = props => {
    const videoStyles = {
        minWidth: '100%',
        minHeight: '100%',
        zIndex: -1,
        filter: 'brightness(45%)',
    }

    return (
        <Wrapper>
            <VideoWrapper>
                <video
                    style={videoStyles}
                    autoPlay='autoplay'
                    loop='loop'
                    muted
                >
                    <source src={Video} type='video/mp4' />
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

const VideoWrapper = styled.div`
    z-index: -999;
    width: 100%;
    height: 100%;
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

export default BackgroundVideo
