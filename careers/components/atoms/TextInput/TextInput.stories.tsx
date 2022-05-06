import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextInput } from '.'

export default {
    component: TextInput,
    title: 'Atom/TextInput',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        id: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => (
    <TextInput {...args} />
)

export const Example = Template.bind({})
Example.args = {
    label: 'My label',
    placeholder: 'My placeholder',
}
