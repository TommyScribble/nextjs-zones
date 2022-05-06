import { IconCommonProps } from '../../../../careers/typings/types'

export const IconFinance = ({ width, height, className }: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 51}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 51 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Finance Icon</title>
        <path
            d="M25.0148 26.3496L24.9448 24.7341H28.4423V21.9913H24.8399L24.735 19.353C24.735 18.6092 24.9021 18.0475 25.2363 17.6678C25.5783 17.2881 26.0057 17.0983 26.5187 17.0983C27.1482 17.0983 27.6301 17.2726 27.9643 17.6213C28.3063 17.97 28.4773 18.4736 28.4773 19.1322H31.8232C31.8232 17.6446 31.3529 16.4668 30.4125 15.599C29.4721 14.7235 28.178 14.2857 26.5304 14.2857C24.9215 14.2857 23.6352 14.739 22.6715 15.6455C21.7155 16.5521 21.2376 17.7879 21.2376 19.353L21.3192 21.9913H19.5238V24.7341H21.4124L21.4707 26.5472C21.4707 27.7947 21.1909 28.4881 20.6313 28.6276H19.5588V31.4286H31.9048V28.6276H24.292C24.7739 28.062 25.0148 27.3027 25.0148 26.3496Z"
            fill="currentColor"
        ></path>
        <path
            d="M38.5714 40.9524H11.9048V38.0952H38.5714V40.9524Z"
            fill="currentColor"
        ></path>
        <path
            d="M11.9048 46.6667H38.5714V43.8095H11.9048V46.6667Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.4762 0H0V60H50.4762V0ZM2.85714 57.1429V2.85714H47.619V57.1429H2.85714Z"
            fill="currentColor"
        ></path>
    </svg>
)
