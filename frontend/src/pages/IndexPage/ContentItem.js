import styled, { css } from 'styled-components'

const ContentItem = props => {
    return (
        <Wrapper className='content__item' primaryColor={props.primaryColor}>
            {props.children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin: 20px 40px;

    ${({ primaryColor }) =>
        primaryColor &&
        css`
            color: ${primaryColor} !important;
        `}
`

export default ContentItem
