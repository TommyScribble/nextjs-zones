import React from 'react'
import { render, screen } from '@testing-library/react'
import { AnchorLink } from './index'

const data = {
    href: '/test-link',
    eventCategory: 'Event category',
    eventAction: 'Event action',
    eventLabel: 'Event Label',
    linkText: 'Test link',
}

render(
    <AnchorLink
        href={data.href}
        eventCategory={data.eventCategory}
        eventAction={data.eventAction}
        eventLabel={data.eventLabel}
    >
        {data.linkText}
    </AnchorLink>
)

it('renders the correct link text', () => {
    expect(screen.getByText(data.linkText)).toBeInTheDocument()
})

it('pushes the user to the correct url when clicked', () => {
    render(
        <AnchorLink
            href={data.href}
            eventCategory={data.eventCategory}
            eventAction={data.eventAction}
            eventLabel={data.eventLabel}
        >
            {data.linkText}
        </AnchorLink>
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', data.href)
})
