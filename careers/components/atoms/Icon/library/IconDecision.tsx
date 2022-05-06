import { IconCommonProps } from '../../../../careers/typings/types'

export const IconDecision = ({ width, height, className }: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 68}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 68 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Decision Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 28.5C0 16.0736 10.0736 6 22.5 6C34.9264 6 45 16.0736 45 28.5C45 40.9264 34.9264 51 22.5 51C10.0736 51 0 40.9264 0 28.5ZM22.5 9C11.7304 9 3 17.7304 3 28.5C3 39.2696 11.7304 48 22.5 48C33.2696 48 42 39.2696 42 28.5C42 17.7304 33.2696 9 22.5 9Z"
            fill="currentColor"
        ></path>
        <path
            d="M41.0282 46.0205C43.5036 49.0592 47.2753 51 51.5002 51C58.9561 51 65.0002 44.9558 65.0002 37.5C65.0002 30.0442 58.9561 24 51.5002 24C50.1789 24 48.902 24.1898 47.6951 24.5437C47.5394 23.5437 47.3255 22.563 47.0571 21.6051C48.4707 21.2108 49.9609 21 51.5002 21C60.6129 21 68.0002 28.3873 68.0002 37.5C68.0002 46.6127 60.6129 54 51.5002 54C46.4136 54 41.8646 51.6983 38.8379 48.0796C39.6078 47.4365 40.3393 46.7488 41.0282 46.0205Z"
            fill="currentColor"
        ></path>
        <path
            d="M47.072 35.3418C47.3852 34.2144 47.6229 33.0556 47.7794 31.8711L51.2712 35.2005L57.5576 28.6074L59.7288 30.6776L53.4424 37.2708L60.0355 43.5572L57.9653 45.7284L51.3722 39.442L45.086 46.0348L42.9148 43.9646L49.201 37.3717L47.072 35.3418Z"
            fill="currentColor"
        ></path>
        <path
            d="M22.4999 43.5572L27.9709 29.5948L33.4419 15.6324L30.0454 15.6331L21.5454 37.0855L16.8491 31.4566H12.5454L22.4999 43.5572Z"
            fill="currentColor"
        ></path>
    </svg>
)
