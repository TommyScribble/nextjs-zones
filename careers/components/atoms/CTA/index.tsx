import { CTAProps, DefaultCtaColor } from './CTA.types'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Link from 'next/link'
import styles from './CTA.module.scss'

import Analytics from '../../../helpers/analytics'

export const CTA = ({
    text,
    large,
    className,
    eventCategory,
    eventAction,
    eventLabel,
    ...props
}: CTAProps) => {
    const router = useRouter()

    const handleAnalyticsAction = () => {
        Analytics.trackAction(
            eventCategory,
            eventAction,
            eventLabel,
            router.asPath
        )
    }

    const handleButtonClick = async () => {
        if (props.type === 'button' && props.onClick) {
            props.onClick()
            handleAnalyticsAction()
        }
    }

    const variantStyle =
        props.variant === 'primary' || props.variant === 'secondary'
            ? styles[`${props.variant}--${props.color || DefaultCtaColor}`]
            : props.variant === 'quaternary'
            ? styles.quaternary
            : props.variant === 'tertiary'
            ? styles.tertiary
            : undefined

    const classList = classNames([
        variantStyle,
        large && styles.large,
        className,
    ])

    return (
        <>
            {props.type === 'link' && (
                <Link href={props.href || ''}>
                    <a
                        target={props.target}
                        onClick={handleAnalyticsAction}
                        className={classList}
                    >
                        {text}
                    </a>
                </Link>
            )}

            {props.type === 'button' && (
                <button
                    type={props.buttonType}
                    onClick={handleButtonClick}
                    className={classList}
                >
                    {text}
                </button>
            )}
        </>
    )
}
