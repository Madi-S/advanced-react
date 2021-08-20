import { fireEvent, render, screen } from '@testing-library/react'
import Navbar from './Navbar'

let component

beforeEach(() => {
    component = render(<Navbar />)
})

afterEach(() => {})

test('Should render navbar', () => {
    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeVisible()
})

test('Should render navbar with 5 clickable buttons: "about me", "feedback", "courses","login", "register" and other 5 hidden exact buttons for mobile access', () => {
    const [aboutMeBtn, _aboutMeBtn] = screen.getAllByText(/about me/i)
    expect(aboutMeBtn).toBeVisible()
    expect(aboutMeBtn).toBeDisabled()

    const [feedbackBtn, _feedbackBtn] = screen.getAllByText(/feedback/i)
    expect(feedbackBtn).toBeVisible()
    expect(feedbackBtn).not.toBeDisabled()

    const [loginBtn, _loginBtn] = screen.getAllByText(/login/i)
    expect(loginBtn).toBeVisible()
    expect(loginBtn).not.toBeDisabled()

    const [registerBtn, _registerBtn] = screen.getAllByText(/register/i)
    expect(registerBtn).toBeVisible()
    expect(registerBtn).not.toBeDisabled()

    const [coursesBtn, _coursesBtn] = screen.getAllByText(/courses/i)
    expect(coursesBtn).toBeVisible()
    expect(coursesBtn).not.toBeDisabled()
})

test('Should render navbar with logo image', () => {
    const logo = screen.getByAltText(/logo/i)

    expect(logo).toBeVisible()
})

test('Should render navbar with heading', () => {
    const heading = screen.getByText(/Madi-S/i)

    expect(heading).toBeVisible()
})
