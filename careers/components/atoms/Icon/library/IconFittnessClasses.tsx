import { IconCommonProps } from '../../../../careers/typings/types'

export const IconFittnessClasses = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 81}
        height={height ? height : width ? 'auto' : 49}
        viewBox="0 0 81 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Fittness Classes Icon</title>
        <path
            d="M53.5212 24.6422L51.6188 22.1875C50.1549 24.0137 49.0713 26.1579 48.4881 28.5H51.6023C52.035 27.1035 52.6881 25.804 53.5212 24.6422Z"
            fill="currentColor"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.5916 0H18.0696L17.7048 0.228003C16.9028 0.729278 15.7227 1.74663 15.3482 3.18442C15.145 3.96469 15.1944 4.829 15.6266 5.67473C16.0424 6.48835 16.7576 7.17997 17.7048 7.772L19.2948 5.228C18.6421 4.82003 18.3906 4.49082 18.298 4.30964C18.2219 4.16058 18.2213 4.05614 18.2514 3.94058C18.3241 3.66147 18.6007 3.30225 18.975 3H24.408L14.5791 32.0188L17.4205 32.9812L23.6204 14.6768L38.279 33H63.9999L65.1855 30.5811L50.4535 11.5721L53.4344 5.5H57.5V2.5H47.5V5.5H50.0924L47.8833 10H25.2045L28.5916 0ZM26.1209 13H46.4106L38.6948 28.7174L26.1209 13ZM48.9817 14.5703L41.4071 30H60.9397L48.9817 14.5703Z"
            fill="currentColor"
        ></path>
        <path
            d="M23.8356 21.165C27.5456 23.571 30 27.7489 30 32.5C30 39.9558 23.9558 46 16.5 46C9.04416 46 3 39.9558 3 32.5C3 25.077 8.99095 19.0534 16.4014 19.0004L17.4093 16.0246C17.1083 16.0083 16.8051 16 16.5 16C7.3873 16 0 23.3873 0 32.5C0 41.6127 7.3873 49 16.5 49C25.6127 49 33 41.6127 33 32.5C33 26.4229 29.7146 21.1131 24.823 18.2499L23.8356 21.165Z"
            fill="currentColor"
        ></path>
        <path
            d="M64.4999 49C56.4117 49 49.6827 43.1804 48.272 35.5H51.3344C52.6986 41.512 58.0751 46 64.4999 46C71.9557 46 77.9999 39.9558 77.9999 32.5C77.9999 25.0442 71.9557 19 64.4999 19C62.8165 19 61.2051 19.3081 59.719 19.871L57.8127 17.4113C59.8568 16.5041 62.1195 16 64.4999 16C73.6126 16 80.9999 23.3873 80.9999 32.5C80.9999 41.6127 73.6126 49 64.4999 49Z"
            fill="currentColor"
        ></path>
    </svg>
)
