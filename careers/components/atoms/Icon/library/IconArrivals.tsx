import { IconCommonProps } from '../../../../careers/typings/types'

export const IconArrivals = ({ width, height, className }: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 37}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 37 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Arrivals Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.2846 0H8V7.25611H13.3211V16.7213H16.2236V7.25611H22.0285V16.7213H24.9309V7.25611H29.2846V0ZM10.9024 4.35367V2.90245H26.3822V4.35367H10.9024ZM36.7643 19.3496H0V52.7277H36.7643V19.3496ZM2.90245 49.8253V22.2521H33.8619V49.8253H2.90245ZM7.73985 27.5732V44.9879H10.6423V27.5732H7.73985ZM16.9309 44.9879V27.5732H19.8334V44.9879H16.9309ZM26.122 27.5732V44.9879H29.0245V27.5732H26.122ZM4.83741 55.1626C4.83741 57.8342 7.00319 60 9.67482 60C12.3464 60 14.5122 57.8342 14.5122 55.1626H11.6098C11.6098 56.2312 10.7435 57.0975 9.67482 57.0975C8.60617 57.0975 7.73985 56.2312 7.73985 55.1626H4.83741ZM21.7683 55.1626C21.7683 57.8342 23.9341 60 26.6057 60C29.2774 60 31.4432 57.8342 31.4432 55.1626H28.5407C28.5407 56.2312 27.6744 57.0975 26.6057 57.0975C25.5371 57.0975 24.6708 56.2312 24.6708 55.1626H21.7683Z"
            fill="currentColor"
        ></path>
    </svg>
)
