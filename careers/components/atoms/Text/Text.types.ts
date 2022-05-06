import { Colors } from '../../../careers/typings/utilities'

export enum TextTags {
    p = 'p',
    span = 'span',
}

export enum TextVariations {
    bodyM = 'bodyM',
    body = 'body',
    bodyA11y = 'bodyA11y',
    bodyS = 'bodyS',
}

export type TextProps = {
    text: string | string[]
    variant: keyof typeof TextVariations
    as?: keyof typeof TextTags
    color?: keyof typeof Colors
    className?: string
    role?: string
    id?: string
}
