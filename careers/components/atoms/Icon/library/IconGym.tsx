import { IconCommonProps } from '../../../../careers/typings/types'

export const IconGym = ({ width, height, className }: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 68}
        height={height ? height : width ? 'auto' : 49}
        viewBox="0 0 68 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Gym Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 0H20V49H7V40H0V9H7V0ZM7 12V37H3V12H7ZM17 46H10V3H17V46Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62 0H49V49H62V40H68V9H62V0ZM52 3H59V46H52V3ZM65 37H62V12H65V37Z"
            fill="currentColor"
        ></path>
        <path d="M46 22H23V19H46V22Z" fill="currentColor"></path>
        <path d="M23 28H46V25H23V28Z" fill="currentColor"></path>
    </svg>
)
