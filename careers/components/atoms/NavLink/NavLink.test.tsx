import React from 'react'
import { render, screen } from '@testing-library/react'
import { NavLink, NavLinkProps } from './index'
import userEvent from '@testing-library/user-event'

const clickFunc = jest.fn()

const data: NavLinkProps = {
    href: '/about',
    target: '_self',
    onClick: clickFunc(),
    navTitle: 'About',
    eventCategory: 'Event category',
    eventAction: 'Event action',
    eventLabel: 'Event Label',
}

it('renders the correct link text', () => {
    render(
        <NavLink
            href={data.href}
            target={data.target}
            navTitle={data.navTitle}
            eventCategory={data.eventCategory}
            eventAction={data.eventAction}
            eventLabel={data.eventLabel}
        />
    )
    expect(
        screen.getByRole('link', { name: data.navTitle })
    ).toBeInTheDocument()
})

it('navigates the user to the correct url', () => {
    render(
        <NavLink
            href={data.href}
            navTitle={data.navTitle}
            target={data.target}
            eventCategory={data.eventCategory}
            eventAction={data.eventAction}
            eventLabel={data.eventLabel}
        />
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', data.href)
})

it('fires the onClick function only once when the use clicks the link', () => {
    render(
        <NavLink
            href={data.href}
            target={data.target}
            navTitle={data.navTitle}
            eventCategory={data.eventCategory}
            eventAction={data.eventAction}
            eventLabel={data.eventLabel}
            onClick={data.onClick}
        />
    )

    const anchor = screen.getByRole('link')
    userEvent.click(anchor)
    expect(clickFunc).toHaveBeenCalledTimes(1)
})

describe('applies the correct link styling when', () => {
    it('is not the the current route', () => {
        render(
            <NavLink
                href={data.href}
                navTitle={data.navTitle}
                target={data.target}
                eventCategory={data.eventCategory}
                eventAction={data.eventAction}
                eventLabel={data.eventLabel}
            />
        )

        const anchor = screen.getByRole('link')
        expect(anchor).toHaveClass('navLink')
        expect(anchor).not.toHaveClass('active')
    })

    it('is the current route', () => {
        render(
            <NavLink
                href="/test-page" // the page in the mock
                navTitle={data.navTitle}
                target={data.target}
                eventCategory={data.eventCategory}
                eventAction={data.eventAction}
                eventLabel={data.eventLabel}
            />
        )
        const anchor = screen.getByRole('link')
        expect(anchor).toHaveClass('navLink active')
    })
})
