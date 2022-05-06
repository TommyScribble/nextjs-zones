import classNames from 'classnames'
import { TextProps } from './Text.types'
import style from './Text.module.scss'

export const Text = ({
    text,
    as = 'p',
    variant,
    color = 'utility_greydark',
    className,
    role,
    id,
}: TextProps) => {
    const Tag = as

    const classList = classNames([style[variant], color, className])

    return (
        <>
            {typeof text === 'string' ? (
                <Tag id={id} className={classList} role={role}>
                    {text}
                </Tag>
            ) : (
                text.map((item, i) => (
                    <Tag key={i} id={id} className={classList} role={role}>
                        {item}
                    </Tag>
                ))
            )}
        </>
    )
}
