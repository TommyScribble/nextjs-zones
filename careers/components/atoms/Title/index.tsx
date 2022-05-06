import classNames from 'classnames'
import style from './Title.module.scss'
import { TitleVariations, TitleProps, TitleTypography } from './Title.types'

export const titleTypography: TitleTypography = {
    [TitleVariations.headingXXL]: 'h1',
    [TitleVariations.headingXL]: 'h2',
    [TitleVariations.headingL]: 'h3',
    [TitleVariations.headingM]: 'h4',
    [TitleVariations.headingS]: 'h5',
    [TitleVariations.headingXS]: 'h6',
    [TitleVariations.headingXXS]: 'h6',
}

export const Title = ({
    text,
    as,
    variant,
    color = 'utility_greydark',
    font = 'blueStoneMono',
    className,
}: TitleProps) => {
    const Tag = as ? as : titleTypography[variant]

    const classList = classNames([
        style[variant],
        style[font],
        color,
        className,
    ])

    return <Tag className={classList}>{text}</Tag>
}
