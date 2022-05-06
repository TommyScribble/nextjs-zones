import { CTA } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
    title: 'Atom/CTA',
    component: CTA,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof CTA>

const Template: ComponentStory<typeof CTA> = (args) => <CTA {...args} />

export const TypeButton = Template.bind({})
TypeButton.parameters = {
    controls: { include: ['text', 'variant', 'color', 'large', 'onClick'] },
}
TypeButton.argTypes = {
    onClick: { action: 'clicked' },
}
TypeButton.args = {
    text: 'CTA',
    variant: 'primary',
    color: 'brand_primary',
    large: false,
    type: 'button',
}

export const TypeLink = Template.bind({})
TypeLink.parameters = {
    controls: { include: ['text', 'variant', 'color', 'large', 'href'] },
}

TypeLink.args = {
    text: 'CTA',
    variant: 'primary',
    color: 'brand_primary',
    large: false,
    type: 'link',
    href: 'https://careers.bluestonewales.com/',
    target: '_blank',
}
