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
    component = render(<App />)
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

test('Should have navbar', () => {
    const navbar = getByTestId('navbar')
    expect(navbar).toBeVisible()
})

test('Should have main', () => {
    const main = getByTestId('main')
    expect(main).toBeVisible()
})

test('Should have footer', () => {
    const footer = getByTestId('footer')
    expect(footer).toBeVisible()
})

test('Should render navbar with 5 clickable buttons: "about me", "feedback", "courses","login", "register" and other 5 hidden exact buttons for mobile access', () => {
    const [aboutMeBtn, _aboutMeBtn] = getAllByText(/about me/i)
    expect(aboutMeBtn).toBeVisible()
    expect(aboutMeBtn).toBeDisabled()

    const [feedbackBtn, _feedbackBtn] = getAllByText(/feedback/i)
    expect(feedbackBtn).toBeVisible()
    expect(feedbackBtn).not.toBeDisabled()

    const [loginBtn, _loginBtn] = getAllByText(/login/i)
    expect(loginBtn).toBeVisible()
    expect(loginBtn).not.toBeDisabled()

    const [registerBtn, _registerBtn] = getAllByText(/register/i)
    expect(registerBtn).toBeVisible()
    expect(registerBtn).not.toBeDisabled()

    const [coursesBtn, _coursesBtn] = getAllByText(/courses/i)
    expect(coursesBtn).toBeVisible()
    expect(coursesBtn).not.toBeDisabled()
})

test('Should render navbar with logo image', () => {
    const logo = getByAltText(/logo/i)

    expect(logo).toBeVisible()
})

test('Should render navbar with heading', () => {
    const heading = getByText(/Madi-S/i)

    expect(heading).toBeVisible()
})

test('Should display "accept cookies" window and hide once clicked on accept button', () => {
    const cookiesWindow = getByTestId('accept-cookies')
    const acceptBtn = cookiesWindow.querySelector('button')
    
    expect(cookiesWindow).toBeVisible()
    expect(acceptBtn).toBeVisible()
})
