import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Type } from './Type'
import Layout from '../Layout'

export default {
    component: Type,
    title: 'Styleguide/Typography',
} as ComponentMeta<typeof Type>

export const Typography: ComponentStory<typeof Type> = () => (
    <Layout heading="Typography" subHeading="The fonts and all available sizes">
        <Type />
    </Layout>
)
