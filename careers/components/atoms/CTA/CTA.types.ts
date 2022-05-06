import { UaAnalyticsObject } from '../../../helpers/analytics'
import { Colors } from '../../../typings/utilities'

export const CtaVariations = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    quaternary: 'quaternary',
} as const

export const { utility_greydark, ...CtaColors } = Colors

interface CtaGeneric extends UaAnalyticsObject {
    text: string
    large?: boolean
    className?: string
}

// CTA variations
export interface VariationsWithColor extends CtaGeneric {
    variant: typeof CtaVariations.primary | typeof CtaVariations.secondary
    color?: keyof typeof CtaColors
}
interface VariationsWithoutColor extends CtaGeneric {
    variant: typeof CtaVariations.tertiary | typeof CtaVariations.quaternary
}
export type CtaVariation = VariationsWithColor | VariationsWithoutColor

// CTA types
export type CtaLink = {
    type: 'link'
    href: string
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target']
} & CtaVariation

export type CtaButton = {
    type: 'button'
    onClick?: () => void
    buttonType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
} & CtaVariation

export type CTAProps = CtaLink | CtaButton

export const DefaultCtaColor: VariationsWithColor['color'] = 'brand_primary'
