import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Analytics from '../../../helpers/analytics'

import anchorStyles from './AnchorLink.module.scss'

type Props = {
    href: string
    onClick?: (...args: any) => void
    children?: any
    className?: string
    eventCategory: string
    eventAction: string
    eventLabel: string
    target?: string
}

export const AnchorLink = ({
    href,
    onClick,
    children,
    className,
    eventCategory,
    eventAction,
    eventLabel,
    target,
}: Props) => {
    const router = useRouter()

    const styles = classNames([
        'brand-primary',
        anchorStyles.anchorLink,
        className,
    ])

    const handleClick = () => {
        onClick && onClick()
        Analytics.trackAction(
            eventCategory,
            eventAction,
            eventLabel,
            router.asPath
        )
    }

    return (
        <>
            <Link href={href ?? '#'}>
                <a
                    onClick={handleClick}
                    className={styles}
                    target={target ?? '_self'}
                >
                    {children}
                </a>
            </Link>
        </>
    )
}
