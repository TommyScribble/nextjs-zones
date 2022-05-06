import { IconCommonProps } from '../../../../careers/typings/types'

export const IconSchoolsProgramme = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 61}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Schools Programme Icon</title>
        <path
            d="M26.6129 0H0V60H49.3548V27.5806H46.4516V57.0968H2.90323V2.90323H26.6129V0Z"
            fill="currentColor"
        ></path>
        <path
            d="M8.70968 39.6774H41.6129V36.7742H8.70968V39.6774Z"
            fill="currentColor"
        ></path>
        <path
            d="M41.6129 45.4839H8.70968V42.5806H41.6129V45.4839Z"
            fill="currentColor"
        ></path>
        <path
            d="M41.6129 51.2903H8.70968V48.3871H41.6129V51.2903Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M60.3077 8.3869L41.2903 0.517641L22.2729 8.3869L41.2903 16.2562L54.7097 10.7033V18.7097L57.8064 21.2903V9.4219L60.3077 8.3869ZM41.2903 12.9047L30.3722 8.3869L41.2903 3.86907L52.2084 8.3869L41.2903 12.9047Z"
            fill="currentColor"
        ></path>
        <path
            d="M30.9677 15.0815V21.8225L41.5484 26.0548L52.129 21.8225V14.8679L49.0323 16.1494V19.7259L41.5484 22.7194L34.0645 19.7259V16.3629L30.9677 15.0815Z"
            fill="currentColor"
        ></path>
    </svg>
)
