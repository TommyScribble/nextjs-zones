import { IconCommonProps } from '../../../../careers/typings/types'

export const IconDiscountsFood = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 53}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 53 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Discounts Food Icon</title>
        <path
            d="M37.0229 13.3333C36.7553 7.62378 32.0415 3.07692 26.2657 3.07692C20.4899 3.07692 15.7761 7.62378 15.5085 13.3333H15.5058V20H12.4289V13.3333C12.6986 5.9239 18.7904 0 26.2657 0C33.741 0 39.8328 5.9239 40.1025 13.3333H40.1212V20H37.0442V13.3333H37.0229Z"
            fill="currentColor"
        ></path>
        <path
            d="M9.35196 31.7949H43.7109L44.7366 28.718H8.32632L9.35196 31.7949Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 23.0769H52.5178L40.1095 60H12.9991L0 23.0769ZM4.3453 26.1538L15.1779 56.9231H37.8975L48.2378 26.1538H4.3453Z"
            fill="currentColor"
        ></path>
    </svg>
)
