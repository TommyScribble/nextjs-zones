import React from 'react'
import { render, screen } from '@testing-library/react'
import { Checkbox } from './index'
import userEvent from '@testing-library/user-event'

const data = {
    name: 'test checkbox',
    label: 'this is a test checkbox',
}

const handleChangeMock = jest.fn()

render(
    <Checkbox name={data.name} label={data.label} onChange={handleChangeMock} />
)

const checkbox = screen.getByRole('checkbox')

it('renders all elements', () => {
    expect(
        screen.getByRole('checkbox', { name: data.label })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(data.label)).toBeInTheDocument()
})

it('is unchecked by default', () => {
    expect(checkbox).not.toBeChecked()
})

it('is checked/uncheched after one click', () => {
    userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    userEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
})

it('runs the onChange function once when a user clicks', () => {
    render(
        <Checkbox
            name={data.name}
            label={data.label}
            onChange={handleChangeMock}
        />
    )
    const checkbox = screen.getByRole('checkbox')
    userEvent.click(checkbox)
    expect(handleChangeMock).toHaveBeenCalledTimes(1)
})
