import { Icon } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
    title: 'Atom/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        iconName: {
            control: { type: 'select' },
        },
        color: {
            control: { type: 'select' },
        },
        className: {
            table: {
                disable: true,
            },
        },
        width: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Example = Template.bind({})
Example.args = {
    color: 'brand_primary',
    iconName: 'IconActivities',
    height: 200,
}
