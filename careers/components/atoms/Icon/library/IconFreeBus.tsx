import { IconCommonProps } from '../../../../careers/typings/types'

export const IconFreeBus = ({ width, height, className }: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 56}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 56 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Free Bus Icon</title>
        <path d="M11 45H46V42H11V45Z" fill="currentColor"></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.5 0H4.5V51.5H51.5V0ZM48 5V3H8V5H48ZM48 8H8V27.3226C8.15054 27.3483 8.31421 27.3759 8.49046 27.405C9.59063 27.5868 11.1801 27.8299 13.1265 28.0733C17.023 28.5605 22.3318 29.0462 28 29.0462C33.6682 29.0462 38.977 28.5605 42.8735 28.0733C44.8199 27.8299 46.4094 27.5868 47.5095 27.405C47.6858 27.3759 47.8495 27.3483 48 27.3226V8ZM7.99391 30.3181C7.8171 30.2889 7.6523 30.2612 7.5 30.2352V48.5H48.5V30.2352C48.3477 30.2612 48.1829 30.2889 48.0061 30.3181C46.8719 30.5055 45.2426 30.7547 43.2515 31.0036C39.273 31.501 33.8318 32 28 32C22.1682 32 16.727 31.501 12.7485 31.0036C10.7574 30.7547 9.12812 30.5055 7.99391 30.3181Z"
            fill="currentColor"
        ></path>
        <path d="M53 25V12H56V25H53Z" fill="currentColor"></path>
        <path d="M0 12V25H3L3 12H0Z" fill="currentColor"></path>
        <path
            d="M10.5 54V56.5H15.5V54H18.5V59.5H7.5V54H10.5Z"
            fill="currentColor"
        ></path>
        <path
            d="M41 56.5V54H38V59.5H49V54H46V56.5H41Z"
            fill="currentColor"
        ></path>
    </svg>
)
