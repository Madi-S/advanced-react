import { fireEvent, render, screen, waitFor, fn } from '@testing-library/react'
import IndexPage from './IndexPage'

test('Should render index page with background video', () => {
    render(<IndexPage />)

    const video = document.querySelector('video')
    const videoSource = video.querySelector('source')

    expect(videoSource.getAttribute('src')).toBe('coding.mp4')
    expect(videoSource.getAttribute('type')).toBe('video/mp4')
})

test('Should display text with typing effect above background video', () => {
    const { getByTestId } = render(<IndexPage />)

    const typingEffectWrapper = getByTestId('index-typing-effect')
    expect(typingEffectWrapper.innerHTML).toBe(
        `I'm a <i>unique</i> web developer`
    )
})

test('Should render content wrapper with `content` className', () => {
    const { getByTestId } = render(<IndexPage />)

    const contentWrapper = getByTestId('index-content')
    expect(contentWrapper).toBeVisible()
    expect(contentWrapper.className).toBe('content')
})

test('Should render content wrapper with 3 content items', () => {
    const { getByTestId } = render(<IndexPage />)

    const contentWrapper = getByTestId('index-content')
    const contentItems = contentWrapper.querySelectorAll('.content__item')

    expect(contentItems.length).toBe(3)
    for (let contentItem of contentItems) {
        expect(contentItem).toBeVisible()
    }
})
