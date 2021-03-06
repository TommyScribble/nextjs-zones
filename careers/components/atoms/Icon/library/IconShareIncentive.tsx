import { IconCommonProps } from '../../../../careers/typings/types'

export const IconShareIncentive = ({
    width,
    height,
    className,
}: IconCommonProps) => (
    <svg
        width={width ? width : height ? 'auto' : 50}
        height={height ? height : width ? 'auto' : 60}
        viewBox="0 0 50 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <title>Share Incentive Icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.8058 0.341002C31.2483 -0.34375 34.8165 0.0076891 38.0593 1.35088C41.302 2.69407 44.0736 4.96868 46.0236 7.88708C47.9737 10.8055 49.0145 14.2366 49.0145 17.7465V19.0141H32.5356V35.493H31.268C27.7581 35.493 24.327 34.4522 21.4086 32.5022C18.4902 30.5521 16.2156 27.7805 14.8724 24.5378C13.5292 21.295 13.1777 17.7268 13.8625 14.2843C14.5472 10.8418 16.2374 7.67972 18.7193 5.19783C21.2012 2.71594 24.3633 1.02575 27.8058 0.341002ZM37.0891 3.69311C34.3096 2.5418 31.2511 2.24057 28.3004 2.8275C25.3497 3.41443 22.6393 4.86316 20.512 6.9905C18.3846 9.11784 16.9359 11.8282 16.349 14.7789C15.7621 17.7296 16.0633 20.7881 17.2146 23.5676C18.3659 26.3471 20.3156 28.7228 22.817 30.3942C24.9658 31.83 27.4388 32.6907 30.0004 32.9049V16.4789H46.4264C46.2122 13.9173 45.3514 11.4443 43.9157 9.29556C42.2443 6.79408 39.8686 4.84442 37.0891 3.69311ZM44.1574 31.1305C41.6755 33.6124 38.5134 35.3026 35.0709 35.9873V33.2746C38.0216 32.6877 40.2374 31.4651 42.3647 29.3378C44.4921 27.2105 45.9408 24.5001 46.5277 21.5494H49.2567C48.7669 25.1763 46.6393 28.6486 44.1574 31.1305ZM40.5634 37.8129V60.0004H0V10.9863H11.367C11.0761 11.8096 10.8337 12.6558 10.6434 13.5215H2.50908V57.4652H38.0543V38.7635C38.915 38.4979 39.7526 38.1798 40.5634 37.8129ZM33.803 43.0987H6.76074V40.5635H33.803V43.0987ZM33.803 48.169H6.76074V45.6338H33.803V48.169ZM6.76074 53.2393H33.803V50.7041H6.76074V53.2393Z"
            fill="currentColor"
        ></path>
    </svg>
)
