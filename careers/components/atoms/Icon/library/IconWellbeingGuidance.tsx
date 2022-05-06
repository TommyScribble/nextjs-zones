import { IconCommonProps } from '../../../../careers/typings/types'

export const IconWellbeingGuidance = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 65}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 65 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Wellbeing Guidance Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.8029 8.06738L54.7499 26.898L39.7556 43.9892L37.5004 42.0107L50.8434 26.8019L37.4531 9.93252L39.8029 8.06738Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.0997 8.06738L64.0468 26.898L49.0524 43.9892L46.7973 42.0107L60.1403 26.8019L46.75 9.93252L49.0997 8.06738Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 7H30.0558L45.4533 26.3981L30.0108 44H0V7ZM3 10V41H28.6519L41.5467 26.3019L28.6069 10H3Z"
            fill="currentColor"
        ></path>
        <path d="M5 0H20.5V7H17.5V3H8V7H5V0Z" fill="currentColor"></path>
        <path
            d="M5 47V59.5H20.5V47H17.5V56.5H8V47H5Z"
            fill="currentColor"
        ></path>
    </svg>
)
