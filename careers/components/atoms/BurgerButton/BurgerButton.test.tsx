import React from 'react'
import { render, screen } from '@testing-library/react'
import { BurgerButton } from './index'

const handleBurgerButtonClick = () => {}

global.innerWidth = 500
global.dispatchEvent(new Event('resize'))

it("renders burger icon and 'open' text when not active", () => {
    render(
        <BurgerButton isActive={false} handleClick={handleBurgerButtonClick} />
    )
    const button = screen.getByRole('button', {
        name: 'Open the mobile navigation menu',
    })
    expect(button).toBeInTheDocument()
})

it("renders a cross and 'closed' text when clicked and active", () => {
    render(
        <BurgerButton isActive={true} handleClick={handleBurgerButtonClick} />
    )
    const button = screen.getByRole('button', {
        name: 'Close the mobile navigation menu',
    })
    expect(button).toBeInTheDocument()
})
