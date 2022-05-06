import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuantityInput } from './index'

const defaultValues = {
    minQuantity: 0,
    initialQuantity: 1,
}

describe('As a QuantityInput component', () => {
    it('has a button to increase the quantity', () => {
        render(<QuantityInput errorMessageId="testingInput" />)

        const btn = screen.getByRole('button', { name: /increase quantity/i })
        expect(btn).toBeInTheDocument()
    })

    it('has a button to decrease the quantity', () => {
        render(<QuantityInput errorMessageId="testingInput" />)

        const btn = screen.getByRole('button', { name: /decrease quantity/i })
        expect(btn).toBeInTheDocument()
    })

    it('has an input with the correct initial quantity', () => {
        render(
            <QuantityInput
                errorMessageId="testingInput"
                initialQuantity={defaultValues.initialQuantity}
            />
        )

        const input = screen.getByRole('textbox')
        expect(input).toHaveValue(defaultValues.initialQuantity.toString())
    })

    it('increases the quantity when click in the increase button', () => {
        render(
            <QuantityInput
                errorMessageId="testingInput"
                minQuantity={0}
                initialQuantity={1}
            />
        )

        const increaseBtn = screen.getByRole('button', {
            name: /increase quantity/i,
        })

        userEvent.click(increaseBtn)
        const input = screen.getByRole('textbox')
        expect(input).toHaveValue('2')
    })

    it('decreases the quantity when click in the decrease button', () => {
        render(
            <QuantityInput
                errorMessageId="testingInput"
                minQuantity={0}
                initialQuantity={1}
            />
        )

        const decreaseBtn = screen.getByRole('button', {
            name: /decrease quantity/i,
        })

        userEvent.click(decreaseBtn)
        const input = screen.getByRole('textbox')
        expect(input).toHaveValue('0')
    })

    it('does not increase the quantity if this is equal to maxQuantity', () => {
        render(
            <QuantityInput
                errorMessageId="testingInput"
                minQuantity={0}
                initialQuantity={1}
                maxQuantity={2}
            />
        )

        const increaseBtn = screen.getByRole('button', {
            name: /increase quantity/i,
        })
        const input = screen.getByRole('textbox')

        userEvent.click(increaseBtn)
        expect(input).toHaveValue('2')

        userEvent.click(increaseBtn)
        expect(input).toHaveValue('2')
    })

    it('does not decrease the quantity if this is equal to minQuantity', () => {
        render(
            <QuantityInput
                errorMessageId="testingInput"
                minQuantity={0}
                initialQuantity={1}
            />
        )

        const decreaseBtn = screen.getByRole('button', {
            name: /decrease quantity/i,
        })
        const input = screen.getByRole('textbox')

        userEvent.click(decreaseBtn)
        expect(input).toHaveValue('0')

        userEvent.click(decreaseBtn)
        expect(input).toHaveValue('0')
    })

    it('accepts type quantity ammount directly in the quantity input', () => {
        render(
            <QuantityInput
                errorMessageId="testingInput"
                minQuantity={0}
                initialQuantity={1}
            />
        )

        const input = screen.getByRole('textbox')
        userEvent.type(input, '234')

        expect(input).toHaveValue('1234')
    })

    it('shows an error if value is lower than minQuantity', () => {
        render(
            <QuantityInput
                errorMessageId="testingInput"
                minQuantity={1}
                initialQuantity={1}
            />
        )

        const input = screen.getByRole('textbox')
        input.focus()

        userEvent.keyboard('{backspace}')
        expect(input).toHaveValue('')

        userEvent.type(input, '0')
        expect(input).toHaveValue('0')

        const errorMsg = screen.getByRole('alert')
        expect(errorMsg).toBeInTheDocument()
    })

    it('shows an error if value is higher than maxQuantity', () => {
        render(
            <QuantityInput
                errorMessageId="testingInput"
                minQuantity={1}
                initialQuantity={1}
                maxQuantity={3}
            />
        )

        const input = screen.getByRole('textbox')
        input.focus()

        userEvent.keyboard('{backspace}')
        expect(input).toHaveValue('')

        userEvent.type(input, '5')
        expect(input).toHaveValue('5')

        const errorMsg = screen.getByRole('alert')
        expect(errorMsg).toBeInTheDocument()
    })

    it('only accept to insert numbers in the input', () => {
        render(
            <QuantityInput
                errorMessageId="testingInput"
                minQuantity={0}
                initialQuantity={1}
            />
        )

        const input = screen.getByRole('textbox')
        userEvent.type(input, 'abcd')

        expect(input).toHaveValue('1')
    })

    it('sets the minQuantity as default value on blur if the value is a empty string', () => {
        const minQuantity = 1
        render(
            <QuantityInput
                errorMessageId="testingInput"
                minQuantity={minQuantity}
                initialQuantity={1}
            />
        )

        const input = screen.getByRole('textbox')
        input.focus()

        userEvent.keyboard('{backspace}')
        expect(input).toHaveValue('')

        input.blur()
        expect(input).toHaveValue(minQuantity.toString())
    })
})
