import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Footer from './Footer'

let component
let getByRole
let getAllByRole
let getByText
let getAllByText
let getByTestId
let getAllByTestId
let getByAltText
let getAllByAltText

beforeEach(() => {
    component = render(<Footer />)
    getByRole = component.getByRole
    getAllByRole = component.getAllByRole
    getByText = component.getByText
    getAllByText = component.getAllByText
    getByTestId = component.getByTestId
    getAllByTestId = component.getAllByTestId
    getByAltText = component.getByAltText
    getAllByAltText = component.getAllByAltText
})

afterEach(() => {})

test('Should render footer', () => {
    const footer = getByTestId('footer')
    expect(footer).toBeVisible()
})

test('Should render social media links: vk, gmail, github', () => {
    const footer = getByTestId('footer')

    const vkLink = footer.getElementById('vk')
    const gmailLInk = footer.getElementById('gmail')
    const githubLink = footer.getElementById('github')

    vkLink.toBeVisible()
    gmailLInk.toBeVisible()
    githubLink.toBeVisible()
})

test('Should render copyright info', () => {
    const copyrightInfo = getByText(/Copyright © 2021/i)

    copyrightInfo.toBeVisible()
})
