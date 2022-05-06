import { IconCommonProps } from '../../../../careers/typings/types'

export const IconMarketing = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 56}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 56 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Marketing Icon</title>
        <path
            d="M27.8541 2.78541C14.0091 2.78541 2.78541 14.0091 2.78541 27.8541H0C0 12.4707 12.4707 0 27.8541 0C43.2376 0 55.7083 12.4707 55.7083 27.8541C55.7083 43.2376 43.2376 55.7083 27.8541 55.7083C24.4361 55.7083 21.1591 55.092 18.13 53.9634L3.85273 60L7.95047 46.3065L10.619 47.105L8.21739 55.1304L18.0882 50.9569L18.6185 51.1672C21.4748 52.2997 24.59 52.9229 27.8541 52.9229C41.6992 52.9229 52.9229 41.6992 52.9229 27.8541C52.9229 14.0091 41.6992 2.78541 27.8541 2.78541Z"
            fill="currentColor"
        ></path>
        <path
            d="M39.46 44.1024H0.464236V41.317H39.46V44.1024Z"
            fill="currentColor"
        ></path>
        <path
            d="M0.464236 38.5316H39.46V35.7461H0.464236V38.5316Z"
            fill="currentColor"
        ></path>
        <path
            d="M39.46 32.9607H18.1052V30.1753H39.46V32.9607Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.46 9.74895H18.1052V27.3899H39.46V9.74895ZM20.7745 24.6045V12.5344H36.7907V24.6045H20.7745Z"
            fill="currentColor"
        ></path>
    </svg>
)
