import { IconCommonProps } from '../../../../careers/typings/types'

export const IconFood = ({ width, height, className }: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 33}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 33 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Food Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.6005 32.3494L31.6004 0L21.7253 14.1073L21.7253 14.616C21.7255 17.5477 21.7257 20.0765 21.8357 22.1961C21.9455 24.3135 22.1687 26.1423 22.6656 27.6333C23.1754 29.163 24.0012 30.4173 25.3432 31.2481C26.6457 32.0544 28.2564 32.3494 30.1192 32.3494H31.6005ZM24.7942 22.0427C24.6942 20.1138 24.6884 17.808 24.6879 15.0411L28.6379 9.39819L28.6379 29.2935C27.87 29.1841 27.3158 28.985 26.9026 28.7292C26.3006 28.3565 25.8303 27.7592 25.4762 26.6966C25.1092 25.5955 24.9005 24.0914 24.7942 22.0427Z"
            fill="currentColor"
        ></path>
        <path
            d="M0 4.69936H2.96253V18.7714L5.92507 20.9933V4.69936H8.8876V21.1287L12.3439 18.7359V4.69936H15.3064V20.2881L8.8876 24.7319V33.3372H5.92507V24.6965L0 20.2527V4.69936Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.46878 35.3122H12.8376V60H2.46878V35.3122ZM5.43131 38.2747V57.0375H9.87512V38.2747H5.43131Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.7253 35.3122H32.0941V60H21.7253V35.3122ZM24.6878 38.2747V57.0375H29.1316V38.2747H24.6878Z"
            fill="currentColor"
        ></path>
    </svg>
)
