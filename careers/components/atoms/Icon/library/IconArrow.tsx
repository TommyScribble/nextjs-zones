import { IconCommonProps } from '../../../../careers/typings/types'

export const IconArrow = ({ width, height, className }: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 6}
        height={height ? height : width ? 'auto' : 10}
        viewBox={`0 0 6 10`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Arrow Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.12141 0.363956C1.63613 -0.121319 0.849347 -0.121319 0.364072 0.363956C-0.121203 0.849231 -0.121203 1.63602 0.364072 2.12129L3 4.75722L0.363956 7.39327C-0.121319 7.87855 -0.121319 8.66533 0.363956 9.15061C0.849231 9.63588 1.63602 9.63588 2.12129 9.15061L5.62466 5.64724C5.62849 5.64351 5.63229 5.63975 5.63608 5.63596C6.12136 5.15069 6.12136 4.3639 5.63608 3.87863L2.12141 0.363956Z"
            fill="currentColor"
        />
    </svg>
)
