import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Pill } from './index'

export default {
    component: Pill,
    title: 'Atom/Pill',
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof Pill>

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />

export const Example = Template.bind({})
Example.args = {
    text: 'Vegan',
}
