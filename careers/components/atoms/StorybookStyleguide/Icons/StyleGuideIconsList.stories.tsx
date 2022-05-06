import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StyleGuideIconsList } from './StyleGuideIconsList'
import Layout from '../Layout'
import { iconsList } from '../../Icon'

export default {
    component: StyleGuideIconsList,
    title: 'Styleguide/Icons',
} as ComponentMeta<typeof StyleGuideIconsList>

export const Icons: ComponentStory<typeof StyleGuideIconsList> = () => (
    <Layout
        heading="Icons List"
        subHeading={`The list of all the icons (${
            Object.keys(iconsList).length
        })`}
    >
        <StyleGuideIconsList />
    </Layout>
)
