import { IconCommonProps } from '../../../../careers/typings/types'

export const IconStaffEvents = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 57}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 57 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Staff Events Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.117 13.3884C53.117 19.1395 48.4549 23.8017 42.7038 23.8017C41.5803 23.8017 40.4984 23.6237 39.4846 23.2945L37.1878 25.5914C38.8698 26.3529 40.7373 26.7769 42.7038 26.7769C50.098 26.7769 56.0922 20.7827 56.0922 13.3884C56.0922 5.9942 50.098 0 42.7038 0C37.0614 0 32.2343 3.49037 30.2637 8.42975H33.5448C35.3073 5.18102 38.748 2.97521 42.7038 2.97521C48.4549 2.97521 53.117 7.63737 53.117 13.3884ZM0 11.4053H47.2863L24.8522 33.8394V47.6036H21.877V33.8292L11.6107 23.3063H11.4629V23.1547L0 11.4053ZM23.3774 31.1066L15.7673 23.3063H31.1777L23.3774 31.1066ZM40.1035 14.3805L34.1529 20.3311H12.8647L7.05922 14.3805H40.1035ZM9.97656 50.5791H37.7452V60.0006H9.97656V50.5791ZM12.9518 53.5543V57.0254H34.77V53.5543H12.9518Z"
            fill="currentColor"
        ></path>
    </svg>
)
