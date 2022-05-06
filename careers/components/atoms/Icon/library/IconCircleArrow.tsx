import { IconCommonProps } from '../../../../careers/typings/types'

export const IconCircleArrow = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 30}
        height={height ? height : width ? 'auto' : 30}
        viewBox={`0 0 30 30`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Circle Arrow Icon</title>
        <path
            stroke="currentColor"
            strokeWidth={2.059}
            d="m11.541 22.068 8.008-8.008M11.542 7.508l8.008 8.008"
        />
        <circle
            cx={15.073}
            cy={14.928}
            r={13.899}
            stroke="currentColor"
            strokeWidth={2.059}
        />
    </svg>
)
