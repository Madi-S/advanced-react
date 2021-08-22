import styled, { css } from 'styled-components'

const ContentItem = ({ primaryColor, text, illustrationSrc }) => {
    return (
        <Wrapper className='content__item' color={primaryColor}>
            <TextWrapper>
                {text}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                deserunt maiores rem velit eum at commodi? Quod minus fugit
                officia quisquam ducimus incidunt cum voluptas, ratione quia,
                aspernatur sequi similique atque ipsam explicabo eos, illo non
                expedita eveniet nihil. Nemo sequi quae autem id enim. Assumenda
                molestiae doloribus rem reiciendis. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Cumque modi a, iste
                exercitationem, aut, molestias numquam dolor perferendis odio
                ducimus eaque facere asperiores quo ipsam temporibus nisi natus
                odit consectetur.
            </TextWrapper>
            <IllustrationWrapper>
                <img src={illustrationSrc} />
            </IllustrationWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;

    ${({ primaryColor }) =>
        primaryColor &&
        css`
            color: primaryColor;
        `}
`
const TextWrapper = styled.div``
const IllustrationWrapper = styled.div``

export default ContentItem
