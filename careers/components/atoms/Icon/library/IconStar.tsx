import { IconCommonProps } from '../../../../careers/typings/types'

export const IconStar = ({ width, height, className }: IconCommonProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : height ? 'auto' : 23}
        height={height ? height : width ? 'auto' : 21}
        viewBox={`0 0 23 21`}
        fill="none"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Star Icon</title>
        <path
            d="M11.5 0.000976563L14.0819 7.94728L22.4371 7.94728L15.6776 12.8584L18.2595 20.8047L11.5 15.8936L4.74047 20.8047L7.32238 12.8584L0.56285 7.94728L8.91809 7.94728L11.5 0.000976563Z"
            fill="currentColor"
        />
    </svg>
)
