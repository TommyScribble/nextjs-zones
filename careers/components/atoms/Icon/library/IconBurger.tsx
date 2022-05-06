import { IconCommonProps } from '../../../../careers/typings/types'

export const IconBurger = ({ width, height, className }: IconCommonProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : height ? 'auto' : 18}
        height={height ? height : width ? 'auto' : 14}
        viewBox={`0 0 18 14`}
        fill="none"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Burger Icon</title>
        <rect width="18" height="2.07692" fill="currentColor" />
        <rect y="5.46143" width="18" height="2.07692" fill="currentColor" />
        <rect y="11" width="18" height="2.07692" fill="currentColor" />
    </svg>
)
