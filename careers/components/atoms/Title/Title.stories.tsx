import { Title } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
    component: Title,
    title: 'Atom/Title',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
        },
        color: {
            control: { type: 'select' },
        },
        as: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const Example = Template.bind({})
Example.args = {
    text: 'Title typography',
    variant: 'headingXXL',
    color: 'utility_greydark',
    font: 'blueStoneMono',
}
