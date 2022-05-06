import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput } from '.'

describe('As a TextInput component', () => {
    it('renders an input element in the DOM', () => {
        render(<TextInput id="test" />)

        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })

    it('renders the correct label', () => {
        const labelText = 'My label'
        render(<TextInput id="test" label={labelText} />)

        const label = screen.getByLabelText(labelText)
        expect(label).toBeInTheDocument()
    })

    it('does not render the label element if that is not set', () => {
        const labelText = 'My label'
        render(<TextInput id="test" />)

        const label = screen.queryByText(labelText)
        expect(label).not.toBeInTheDocument()
    })

    it('renders the correct placeholder', () => {
        const placeHolderText = 'My placeholder'
        render(<TextInput id="test" placeholder={placeHolderText} />)

        const input = screen.getByPlaceholderText(placeHolderText)
        expect(input).toBeInTheDocument()
    })

    it('renders the correct initial value', () => {
        const initialValueText = 'My value'
        render(<TextInput id="test" initialValue={initialValueText} />)

        const input = screen.getByRole('textbox')
        expect(input).toHaveValue(initialValueText)
    })

    it('renders the correct user input', () => {
        const userInputText = 'User input'
        render(<TextInput id="test" />)

        const input = screen.getByRole('textbox')
        expect(input).toHaveValue('')

        userEvent.type(input, userInputText)
        expect(input).toHaveValue(userInputText)
    })
})
