import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pill } from '.'

describe('As Pill component', () => {
    it('renders the component with the correct text', () => {
        const text = 'test'
        render(<Pill text={text} />)
        const textElement = screen.getByText(text)
        expect(textElement).toBeInTheDocument()
    })

    it('renders the component with the delete button', () => {
        const text = 'test'
        render(<Pill text={text} onClick={() => null} />)
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument()
    })

    it('calls the function when click in the button', () => {
        const text = 'test'
        const dummyFunction = jest.fn()
        render(<Pill text={text} onClick={dummyFunction} />)
        const btn = screen.getByRole('button')
        userEvent.click(btn)
        expect(dummyFunction).toHaveBeenCalled()
    })
})
