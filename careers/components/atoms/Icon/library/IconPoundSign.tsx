import { IconCommonProps } from '../../../../careers/typings/types'

export const IconPoundSign = ({
    width,
    height,
    className,
}: IconCommonProps) => (
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
        <title>Pound Sign Icon</title>
        <path
            d="m28.949 23.4-1.796-1.026a1.027 1.027 0 0 1-.447-1.24 11.87 11.87 0 1 1-9.58-16.951l-.143-.014C16.435 4.125 16 3.697 16 3.148V1.083a1.033 1.033 0 0 1 .99-1.032C16.66.03 16.334 0 16 0 7.161 0 0 7.161 0 16s7.161 16 16 16c6.323 0 11.769-3.674 14.368-8.995-.266.507-.918.68-1.419.394Z"
            fill="currentColor"
        />
        <path
            d="M16.983 4.169C16.435 4.125 16 3.697 16 3.148V1.079c0-.587.495-1.082 1.082-1.043C25.414.592 32 7.527 32 16a15.87 15.87 0 0 1-1.613 6.983c-.258.527-.927.71-1.436.416l-1.796-1.026c-.478-.272-.634-.86-.4-1.359A11.777 11.777 0 0 0 27.87 16c0-6.225-4.792-11.331-10.888-11.831Z"
            fill="currentColor"
        />
        <path
            d="m14.816 17.142.063 1.414c0 .834-.214 1.498-.643 1.993H21V23H10.031v-2.45h.953c.497-.123.746-.73.746-1.821l-.052-1.587H10v-2.4h1.595l-.072-2.308c0-1.37.424-2.45 1.274-3.244.856-.793 1.999-1.19 3.428-1.19 1.464 0 2.614.383 3.45 1.15.835.758 1.252 1.789 1.252 3.09h-2.972c0-.576-.152-1.016-.456-1.321-.297-.305-.725-.458-1.284-.458a1.48 1.48 0 0 0-1.14.498c-.297.332-.445.824-.445 1.475l.093 2.308h3.2v2.4h-3.107Z"
            fill="currentColor"
        />
    </svg>
)