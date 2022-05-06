import React from 'react'

import style from './Description.module.scss'
import global from '../Styleguide.module.scss'

type Props = {
    title?: string
    description?: string
}

const Description = ({ title, description }: Props) => {
    return (
        <div className={`${global.item} ${style.marginBottom}`}>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
        </div>
    )
}

export default Description
