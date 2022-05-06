import { ComponentMeta, ComponentStory } from '@storybook/react'
import { QuantityInput } from './index'

export default {
    component: QuantityInput,
    title: 'Atom/QuantityInput',
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof QuantityInput>

const Template: ComponentStory<typeof QuantityInput> = (args) => (
    <QuantityInput {...args} />
)

export const Example = Template.bind({})
Example.args = {
    minQuantity: 2,
    initialQuantity: 4,
    maxQuantity: 10,
    disableCostumValue: false,
    errorMessageId: 'testingInput',
}
