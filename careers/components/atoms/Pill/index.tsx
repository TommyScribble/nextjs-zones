import { Text } from '../Text'
import styles from './Pill.module.scss'
import { Icon } from '../Icon'
import { MouseEventHandler } from 'react'

type PillProps = {
    text: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Pill = ({ text, onClick }: PillProps) => (
    <div className={styles.pillContainer}>
        <Text text={text} variant="bodyS" />
        {onClick && (
            <button
                aria-label={`remove ${text}`}
                onClick={onClick}
                className={styles.btn}
            >
                <span className="visuallyHidden">{text}</span>
                <Icon iconName="IconArrow" color="brand_primary" />
            </button>
        )}
    </div>
)
