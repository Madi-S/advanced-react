import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

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
    component = render(<Navbar />)
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

test('Should render navbar', () => {
    const navbar = getByTestId('navbar')
    expect(navbar).toBeVisible()
})

test('Should render main', () => {
    const main = getByTestId('main')
    expect(main).toBeVisible()
})

test('Should render footer', () => {
    const footer = getByTestId('footer')
    expect(footer).toBeVisible()
})

test('Should display "accept cookies" window and hide once clicked on accept button', () => {
    const cookiesWindow = getByTestId('accept-cookies')
    const acceptBtn = cookiesWindow.querySelector('button')
    
    expect(cookiesWindow).toBeVisible()
    expect(acceptBtn).toBeVisible()
})
