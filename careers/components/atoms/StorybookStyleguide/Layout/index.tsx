import React, { ReactNode } from 'react'

import styles from './Layout.module.scss'

type Props = {
    heading: string
    subHeading?: string
    children: ReactNode
    customInlineStyle?: {}
}

const StoryLayout = ({
    heading,
    subHeading,
    children,
    customInlineStyle,
}: Props) => {
    return (
        <div className={styles.styleguideLayout} style={customInlineStyle}>
            <div className={styles.header}>
                <h2 className={styles.heading}>{heading}</h2>
                {subHeading && (
                    <span className={styles.subHeading}>{subHeading}</span>
                )}
            </div>
            {children}
        </div>
    )
}

export default StoryLayout
