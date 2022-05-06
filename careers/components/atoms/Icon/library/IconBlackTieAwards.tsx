import { IconCommonProps } from '../../../../careers/typings/types'

export const IconBlackTieAwards = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 45}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 45 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Black Tie Awards Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.3611 10.6178L3.65356 0L0 9.74283L11.2632 24.2241L22.3702 13.117L33.4772 24.2241L44.7404 9.74283L41.0869 0L22.3793 10.6178L22.3702 10.6852L22.3611 10.6178ZM3.17403 9.25943L5.12488 4.05716L19.3777 12.1466L11.5263 19.998L3.17403 9.25943ZM41.5664 9.25943L39.6155 4.05716L25.3627 12.1466L33.2141 19.998L41.5664 9.25943Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.6479 15.8824L29.3038 23.1434L27.8641 28.1826H27.5821L32.0694 50.6192L22.1367 60L12.1912 50.6071L17.1246 28.1826H16.8767L15.4258 23.1045L22.6479 15.8824ZM18.5732 23.92L18.9904 25.3804H25.7504L26.1787 23.8811L22.5599 19.9333L18.5732 23.92ZM18.1444 36.5892L18.8636 33.32H25.7518L26.4057 36.5892H18.1444ZM17.5279 39.3914L16.8087 42.6607H27.62L26.9661 39.3914H17.5279ZM15.4729 48.7321L16.1922 45.4629H28.1804L28.8343 48.7321H15.4729ZM17.2542 51.5343L22.1367 56.1456L27.0192 51.5343H17.2542ZM25.1914 30.5178H19.4801L19.9938 28.1826H24.7244L25.1914 30.5178Z"
            fill="currentColor"
        ></path>
    </svg>
)
