import { Text } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
    component: Text,
    title: 'Atom/Text',
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
        className: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Example = Template.bind({})
Example.args = {
    text: 'Text typography',
    variant: 'bodyM',
    color: 'utility_greydark',
}
