export const ColorNames = {
    brandPrimary: 'brand_primary',
    utilityLightest: 'utility_lightest',
    utilityGreydark: 'utility_greydark',
} as const

export const Colors = {
    [ColorNames.brandPrimary]: '#606E81',
    [ColorNames.utilityLightest]: '#FFFFFF',
    [ColorNames.utilityGreydark]: '#3C3C3B',
} as const

export enum Themes {
    dark = 'dark',
    light = 'light',
}
