import React from 'react'
import Layout from '../Layout'
import { ComponentMeta } from '@storybook/react'

import { Swatch } from './Swatch'
import Description from '../Description/Description'

import style from './Colours.module.scss'

type TColourObj = {
    [key: string]: string
}

const brandColours: TColourObj = {
    primary: '#606E81',
}

const utilityColours: TColourObj = {
    white: '#FFF',
    darkGrey: '#3C3C3B',
}

export default {
    component: Swatch,
    title: 'Styleguide/Colours',
} as ComponentMeta<typeof Swatch>

export const Colours = () => (
    <Layout
        heading="Colour Palette"
        subHeading="How colours are used within Bluestone (currently Recruitment site only)"
    >
        <div className={style.wrapper}>
            <Description
                title="Primary Colour"
                description="This is the main brand colour/s"
            />
            <Swatch
                colour={brandColours.primary}
                colourName="Bluestone Blue"
                colourHex="#606E81"
            />
        </div>
        <br />
        <br />
        <div className={style.wrapper}>
            <Description
                title="Utility Colours"
                description="These are used for copy as well as backgrounds"
            />
            <Swatch
                colour={utilityColours.white}
                colourName="White"
                colourHex="#FFF"
            />
            <Swatch
                colour={utilityColours.darkGrey}
                colourName="Dark Grey"
                colourHex="#3C3C3B"
            />
        </div>
    </Layout>
)
