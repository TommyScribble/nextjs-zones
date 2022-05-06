import React from 'react'
import { render, screen } from '@testing-library/react'
import { Icon, iconsList } from './index'
import { IconProps } from '.'

const data: IconProps = {
    iconName: 'IconActivities',
}

it('renders each icon without crashing', () => {
    const { rerender } = render(<Icon {...data} />)
    Object.keys(iconsList).forEach((icon) => {
        rerender(<Icon iconName={icon as keyof typeof iconsList} />)

        const title: string[] = icon.split('Icon')[1].split(/(?=[A-Z])/)
        let titleSplit = ''
        title.forEach((item: string) => (titleSplit += item + ' '))
        expect(screen.getByTitle(titleSplit + 'Icon')).toBeInTheDocument()
    })
})

it('renders using currentColor', () => {
    // remove special cases (hard coded colours) from the icons we are testing
    const { IconInstagramGradient, IconFacebook, ...icons } = iconsList
    const { container, rerender } = render(<Icon {...data} />)

    Object.keys(icons).forEach((icon) => {
        rerender(<Icon iconName={icon as keyof typeof iconsList} />)
        // eslint-disable-next-line
        container.querySelectorAll('svg path').forEach((path) => {
            if (path.hasAttribute('fill')) {
                expect(path).toHaveAttribute('fill', 'currentColor')
            }
            if (path.hasAttribute('stroke')) {
                expect(path).toHaveAttribute('stroke', 'currentColor')
            }
        })
        // eslint-disable-next-line
        container.querySelectorAll('svg rect').forEach((path) => {
            if (path.hasAttribute('fill')) {
                expect(path).toHaveAttribute('fill', 'currentColor')
            }
            if (path.hasAttribute('stroke')) {
                expect(path).toHaveAttribute('stroke', 'currentColor')
            }
        })
        // eslint-disable-next-line
        container.querySelectorAll('svg circle').forEach((path) => {
            if (path.hasAttribute('fill')) {
                expect(path).toHaveAttribute('fill', 'currentColor')
            }
            if (path.hasAttribute('stroke')) {
                expect(path).toHaveAttribute('stroke', 'currentColor')
            }
        })
    })
})
