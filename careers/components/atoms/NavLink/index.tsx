import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Analytics from '../../../helpers/analytics'

import style from './NavLink.module.scss'

export type NavLinkProps = {
    href: string
    target: string
    onClick?: (...args: any) => void
    navTitle: string
    className?: string
    eventCategory: string
    eventAction: string
    eventLabel: string
}

export const NavLink = ({
    href,
    target,
    onClick,
    navTitle,
    className,
    eventCategory,
    eventAction,
    eventLabel,
}: NavLinkProps) => {
    const router = useRouter()

    const linkClass = (currentUrl: string) => {
        return classNames([
            style.navLink,
            currentUrl === router.asPath && style.active,
            className,
        ])
    }

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
        <Link href={href}>
            <a
                target={target ?? '_self'}
                onClick={handleClick}
                className={linkClass(href)}
                data-title={navTitle}
            >
                {navTitle}
            </a>
        </Link>
    )
}
