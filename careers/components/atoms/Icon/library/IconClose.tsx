import { IconCommonProps } from '../../../../careers/typings/types'

export const IconClose = ({ width, height, className }: IconCommonProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : height ? 'auto' : 26}
        height={height ? height : width ? 'auto' : 27}
        viewBox={`0 0 26 27`}
        fill="none"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Close Icon</title>
        <rect
            x="7.37109"
            y="6.40186"
            width="18"
            height="2.07692"
            transform="rotate(45 7.37109 6.40186)"
            fill="currentColor"
        />
        <rect
            x="5.90234"
            y="19.1294"
            width="18"
            height="2.07692"
            transform="rotate(-45 5.90234 19.1294)"
            fill="currentColor"
        />
    </svg>
)
