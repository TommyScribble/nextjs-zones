import { IconCommonProps } from '../../../../careers/typings/types'

export const IconJobCentre = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 78}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 78 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Job Centre Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.0925 0H12.3469L0 27.5H50.3068L62.0925 0ZM4.63544 24.5L14.2885 3H57.5429L48.3286 24.5H4.63544Z"
            fill="currentColor"
        ></path>
        <path
            d="M72.1918 24.5003L67.1088 15.8812L63.3179 9.50049L64.6099 5.73828L77.4439 27.5003H68.8179V60.0003H7.31787V31.0003H10.3179V57.0003H65.8179V24.5003H72.1918Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.5 36.5V32.5H44.5V36.5H50.5V53.5H22.5V36.5H28.5ZM41.5 35.5V36.5H31.5V35.5H41.5ZM25.5 41.5858V39.5H47.5V41.9051L36.5198 45.4187L25.5 41.5858ZM25.5 44.7621V50.5H47.5V45.0549L36.4802 48.5813L25.5 44.7621Z"
            fill="currentColor"
        ></path>
    </svg>
)
