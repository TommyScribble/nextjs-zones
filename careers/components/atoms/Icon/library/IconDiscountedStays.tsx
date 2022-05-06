import { IconCommonProps } from '../../../../careers/typings/types'

export const IconDiscountedStays = ({
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
        <title>Discounted Stays Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3469 0H62.0925L50.3068 27.5H0L12.3469 0ZM14.2885 3L4.63544 24.5H48.3286L57.5429 3H14.2885Z"
            fill="currentColor"
        ></path>
        <path d="M60 38.5H17V35.5H60V38.5Z" fill="currentColor"></path>
        <path d="M60 44.5H17V41.5H60V44.5Z" fill="currentColor"></path>
        <path d="M17 50.5H60V47.5H17V50.5Z" fill="currentColor"></path>
        <path
            d="M67.1088 15.8812L72.1918 24.5003H65.8179V57.0003H10.3179V31.0003H7.31787V60.0003H68.8179V27.5003H77.4439L64.6099 5.73828L63.3179 9.50049L67.1088 15.8812Z"
            fill="currentColor"
        ></path>
    </svg>
)
