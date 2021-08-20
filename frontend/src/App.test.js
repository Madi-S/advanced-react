import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

let component

beforeEach(() => {
    component = render(<App />)
})

afterEach(() => {})

test('Should render navbar', () => {
    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeVisible()
})

test('Should render main', () => {
    const main = screen.getByTestId('main')
    expect(main).toBeVisible()
})

test('Should render footer', () => {
    const footer = screen.getByTestId('footer')
    expect(footer).toBeVisible()
})

test('Should display "accept cookies" window and hide once clicked on accept button', () => {
    const cookiesWindow = screen.getByTestId('accept-cookies')
    const acceptBtn = cookiesWindow.querySelector('button')

    expect(cookiesWindow).toBeVisible()
    expect(acceptBtn).toBeVisible()
})
