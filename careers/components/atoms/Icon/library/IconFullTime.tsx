import { IconCommonProps } from '../../../../careers/typings/types'

export const IconFullTime = ({ width, height, className }: IconCommonProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : height ? 'auto' : 32}
        height={height ? height : width ? 'auto' : 32}
        viewBox={`0 0 32 32`}
        fill="none"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Full Time Icon</title>
        <path
            d="m28.949 23.4-1.796-1.026a1.027 1.027 0 0 1-.447-1.24 11.87 11.87 0 1 1-9.58-16.951l-.143-.014C16.435 4.125 16 3.697 16 3.148V1.083a1.033 1.033 0 0 1 .99-1.032C16.66.03 16.334 0 16 0 7.161 0 0 7.161 0 16s7.161 16 16 16c6.323 0 11.769-3.674 14.368-8.995-.266.507-.918.68-1.419.394Z"
            fill="currentColor"
        />
        <path
            d="M16.983 4.169C16.435 4.125 16 3.697 16 3.148V1.079c0-.587.495-1.082 1.082-1.043C25.414.592 32 7.527 32 16a15.87 15.87 0 0 1-1.613 6.983c-.258.527-.927.71-1.436.416l-1.796-1.026c-.478-.272-.634-.86-.4-1.359A11.777 11.777 0 0 0 27.87 16c0-6.225-4.792-11.331-10.888-11.831Z"
            fill="currentColor"
        />
        <path
            d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10Z"
            fill="currentColor"
        />
    </svg>
)
