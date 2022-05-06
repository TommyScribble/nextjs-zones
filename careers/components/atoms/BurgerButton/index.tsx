import classNames from 'classnames'
import style from './BurgerButton.module.scss'

type Props = {
    isActive: boolean
    handleClick: () => void
}

export const BurgerButton = ({ isActive, handleClick }: Props) => {
    const burgerClasses = classNames([
        style.burger,
        style.burgerSqueeze,
        isActive && style.isActive,
    ])

    return (
        <button className={burgerClasses} onClick={handleClick} type="button">
            <span className={style.burgerBox}>
                <span className={style.burgerInner} />
            </span>
            <span className="visuallyHidden">
                {!isActive
                    ? 'Open the mobile navigation menu'
                    : 'Close the mobile navigation menu'}
            </span>
        </button>
    )
}
