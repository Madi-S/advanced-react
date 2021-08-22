import styled from 'styled-components'
import Video from './../../misc/video/coding.mp4'

const BackgroundVideo = props => {
    return (
        <Wrapper>
            <video
                style={{
                    width: '100vw',
                    height: '85vh',
                    margin: '0',
                    padding: '0',
                    display: 'block'
                }}
                autoPlay='autoplay'
                loop='loop'
                muted
            >
                <source src={Video} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <ContentWrapper>{props.children}</ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vh;
    height: 85vh;
`

const ContentWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 570px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default BackgroundVideo
