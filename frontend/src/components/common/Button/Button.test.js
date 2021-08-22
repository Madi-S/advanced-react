import { fireEvent, render, screen, waitFor, fn } from '@testing-library/react'
import Button from './Button'

test('Should render button with no props', () => {
    render(<Button />)

    const button = document.querySelector('button')
    expect(button).not.toBeNull()
    expect(button).toBeVisible()
    expect(button).not.toBeDisabled()
})

test('Should render button with specified props', () => {
    const mockCallback = jest.fn()

    render(
        <Button
            styles={{ margin: '10px' }}
            type='danger'
            text='hello i am a button'
            onClick={mockCallback}
        />
    )

    const button = screen.getByText(/hello i am a button/i)

    expect(button).toBeVisible()
    expect(button).not.toBeDisabled()
    expect(button.style.margin).toBe('10px')

    fireEvent.click(button)
    expect(mockCallback).toHaveBeenCalled()
})
