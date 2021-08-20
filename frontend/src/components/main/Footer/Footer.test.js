import { fireEvent, render, screen } from '@testing-library/react'
import Footer from './Footer'

let component

beforeEach(() => {
    component = render(<Footer />)
})

afterEach(() => {})

test('Should render footer', () => {
    const footer = screen.getByTestId('footer')
    expect(footer).toBeVisible()
})

test('Should render social media links: facebook, gmail, github', () => {
    const gmailLInk = screen.getByTitle('gmail-link')
    const githubLink = screen.getByTitle('github-link')
    const facebookLink = screen.getByTitle('facebook-link')

    expect(githubLink).toBeInTheDocument()
    expect(facebookLink).toBeInTheDocument()
    expect(gmailLInk).toBeInTheDocument()
})

test('Should render copyright info', () => {
    const copyrightInfo = screen.getByText(/Copyright © 2021/i)

    expect(copyrightInfo).toBeVisible()
})
