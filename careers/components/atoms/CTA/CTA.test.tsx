import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CTA } from '.'

import {
    CtaButton,
    CtaColors,
    CtaLink,
    CtaVariation,
    CtaVariations,
    VariationsWithColor,
} from './CTA.types'
import Analytics from '../../../helpers/analytics'

jest.mock('../../../helpers/analytics')
const onClick = jest.fn()
beforeAll(() => {
    window.gtag = function () {}
    window.ga = ((() => {}) as unknown) as UniversalAnalytics.ga
})

const CtaProps: CtaVariation = {
    text: 'CTA',
    variant: 'primary',
    eventAction: 'event click',
    eventCategory: 'event action',
    eventLabel: 'event label',
}

const LinkCTA: CtaLink = { ...CtaProps, type: 'link', href: '/testing' }
const ButtonCTA: CtaButton = {
    ...CtaProps,
    type: 'button',
    onClick: onClick,
    buttonType: 'button',
}

const DefaultColor: VariationsWithColor['color'] = 'brand_primary'

describe('As CTA type link', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders the CTA as a anchor tag', () => {
        render(<CTA {...LinkCTA} variant={CtaVariations.tertiary} />)
        expect(screen.getByRole('link')).toHaveTextContent(CtaProps.text)
    })

    it('contains the attribute href with the right url', () => {
        render(<CTA {...LinkCTA} />)

        expect(screen.getByRole('link')).toHaveAttribute('href', LinkCTA.href)
    })

    it('send the analytics on user click', () => {
        render(<CTA {...LinkCTA} />)
        const button = screen.getByRole('link')
        userEvent.click(button)

        expect(Analytics.trackAction).toHaveBeenCalledTimes(1)
    })
})

describe('As CTA type button', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders the CTA as a button tag', () => {
        render(<CTA {...ButtonCTA} />)
        expect(screen.getByRole('button')).toHaveTextContent(CtaProps.text)
    })

    it('calls the function on click', () => {
        render(<CTA {...ButtonCTA} />)
        userEvent.click(screen.getByRole('button'))
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('has the right attribute', () => {
        render(<CTA {...ButtonCTA} />)
        expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('send the analytics on user click', () => {
        render(<CTA {...ButtonCTA} />)
        const button = screen.getByRole('button')
        userEvent.click(button)

        expect(Analytics.trackAction).toHaveBeenCalledTimes(1)
    })
})

describe('As CTA of any type', () => {
    it('renders with the default classes', () => {
        render(<CTA {...LinkCTA} />)
        const cta = screen.getByRole('link')
        expect(cta).toHaveClass(`${CtaProps.variant}--${DefaultColor}`)
    })

    it('renders the right classes in all variations that contains multiple colors', () => {
        const { quaternary, tertiary, ...restVariations } = CtaVariations

        const { rerender } = render(<CTA {...LinkCTA} />)
        Object.values(restVariations).forEach((variation) => {
            Object.values(CtaColors).forEach((color) => {
                rerender(<CTA {...LinkCTA} variant={variation} color={color} />)

                expect(screen.getByRole('link')).toHaveClass(
                    `${variation}--${color}`
                )
            })
        })
    })

    it('renders the tertiary variation with the right classes', () => {
        render(<CTA {...LinkCTA} variant="tertiary" />)
        const cta = screen.getByRole('link')

        expect(cta).toHaveClass(CtaVariations.tertiary)
    })

    it('renders the quaternary variation with the right classes', () => {
        render(<CTA {...LinkCTA} variant="quaternary" />)
        const cta = screen.getByRole('link')

        expect(cta).toHaveClass(CtaVariations.quaternary)
    })
})
