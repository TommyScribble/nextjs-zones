import { IconCommonProps } from '../../../../careers/typings/types'

export const IconEmployeeRewards = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? '100%' : 64}
        height={height ? height : width ? '100%' : 60}
        viewBox="0 0 64 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Employee Rewards Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.5439 0L42.8511 17.6042L63.0877 22.918L49.8393 39.1117L51.0391 60L31.5439 52.4042L12.0487 60L13.2484 39.1117L0 22.918L20.2367 17.6042L31.5439 0ZM40.7588 20.4839L57.2509 24.8145L46.454 38.0118L47.4317 55.0349L31.5439 48.8446L15.656 55.0349L16.6338 38.0118L5.83683 24.8145L22.3289 20.4839L31.5439 6.13721L40.7588 20.4839ZM25.5342 23.2168V43.1171H37.6955V40.2173H28.2744V33.9345H33.5199V31.0348H28.2744V26.1166H37.304V23.2168H25.5342Z"
            fill="currentColor"
        ></path>
    </svg>
)
