import { Icon, iconsList } from '../../Icon'
import { Text } from '../../Text'
import styles from './StyleGuideIconsList.module.scss'

export const StyleGuideIconsList = () => (
    <div className={styles.container}>
        {Object.keys(iconsList).map((iconKey) => (
            <div key={iconKey} className={styles.iconColumn}>
                <Icon
                    iconName={iconKey as keyof typeof iconsList}
                    color="brand_primary"
                    className={styles.icon}
                />
                <Text text={iconKey} variant="body" />
            </div>
        ))}
    </div>
)
