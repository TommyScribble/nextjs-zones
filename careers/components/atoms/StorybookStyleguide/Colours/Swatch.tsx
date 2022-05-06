import React from 'react'

import style from './Colours.module.scss'

type Props = {
    colour: string
    colourName: string
    colourHex: string
}

export const Swatch = ({ colour, colourName, colourHex }: Props) => (
    <div>
        <div className={style.swatch} style={{ backgroundColor: colour }} />
        <div className={style.swatchName}>{colourName}</div>
        <div className={style.swatchHex}>{colourHex}</div>
    </div>
)
