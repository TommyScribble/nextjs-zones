import { Colors } from '../../../careers/typings/utilities'

export enum TitleTags {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    span = 'span',
}

export enum TitleVariations {
    headingXXL = 'headingXXL',
    headingXL = 'headingXL',
    headingL = 'headingL',
    headingM = 'headingM',
    headingS = 'headingS',
    headingXS = 'headingXS',
    headingXXS = 'headingXXS',
}

export enum TitleFonts {
    blueStoneMono,
    interstateMono,
}

export type TitleProps = {
    text: string
    variant: keyof typeof TitleVariations
    font?: keyof typeof TitleFonts
    color?: keyof typeof Colors
    as?: keyof typeof TitleTags
    className?: string
}

export type TitleTypography = {
    [key in TitleVariations]: keyof typeof TitleTags
}
