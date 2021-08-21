import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import AcceptCookies from './AcceptCookies'

let component

beforeEach(() => {
    component = render(<AcceptCookies />)
})

afterEach(() => {})

test('Should render accept cookies window along with clickable ok button', () => {
    const acceptCookiesWindow = screen.getByText(/cookie policy/i)
    expect(acceptCookiesWindow).toBeVisible()

    const okBtn = acceptCookiesWindow.querySelector('button')
    expect(okBtn).toBeVisible()
    expect(okBtn).not.toBeDisabled()
})

test('Should close accept cookies window on ok button click', async () => {
    const acceptCookiesWindow = screen.getByText(/cookie policy/i)
    const okBtn = acceptCookiesWindow.querySelector('button')
    expect(okBtn).toBeVisible()

    fireEvent.click(okBtn)

    await waitFor(() => {
        expect(screen.queryByText(/cookie policy/i)).not.toBeVisible()
    })
})
