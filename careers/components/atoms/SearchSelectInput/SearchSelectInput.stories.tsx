import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SearchSelectInput } from '.'
import { searchSelectInputDummyOptions } from './SearchSelectInput.data'

export default {
    component: SearchSelectInput,
    title: 'Atom/SearchSelectInput',
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof SearchSelectInput>

const Template: ComponentStory<typeof SearchSelectInput> = (args) => (
    <SearchSelectInput {...args} />
)

const Example = Template.bind({})
Example.args = {
    id: 'story',
    placeholder: 'Start typing here',
    options: searchSelectInputDummyOptions,
}
