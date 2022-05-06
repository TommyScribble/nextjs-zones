import { render, screen } from '@testing-library/react'
import { TextTags, TextVariations } from './Text.types'
import { Text } from '.'
import { Colors } from '../../../careers/typings/utilities'

const defaultPlainText = 'Testing text component'
const arrayOfTexts = new Array(10).fill(defaultPlainText)
const variation: keyof typeof TextVariations = 'body'
const defaultColor: keyof typeof Colors = 'utility_greydark'
const defaultTag: keyof typeof TextTags = 'p'

describe('As Text component', () => {
    it('renders as plain string', () => {
        render(<Text variant={variation} text={defaultPlainText} />)
        expect(screen.getByText(defaultPlainText)).toBeInTheDocument()
    })

    it('renders as array of strings with currect number of paragraphs', () => {
        render(<Text variant={variation} text={arrayOfTexts} />)
        expect(screen.getAllByText(defaultPlainText)).toHaveLength(
            arrayOfTexts.length
        )
    })

    it('render with the correct default color', async () => {
        render(<Text variant={variation} text={defaultPlainText} />)

        expect(screen.getByText(defaultPlainText)).toHaveClass(
            `${variation} ${defaultColor}`
        )
    })

    it('render with the correct default tag', () => {
        render(<Text variant={variation} text={defaultPlainText} />)

        const tag = screen.getByText(defaultPlainText)
        expect(tag.nodeName.toLowerCase()).toBe(defaultTag)
    })

    it('render with the correct tag', () => {
        const { rerender } = render(
            <Text variant={variation} text={defaultPlainText} />
        )

        Object.keys(TextTags).map((textTag) => {
            rerender(
                <Text
                    variant={variation}
                    text={defaultPlainText}
                    as={textTag as keyof typeof TextTags}
                />
            )

            const tag = screen.getByText(defaultPlainText)
            expect(tag.nodeName.toLowerCase()).toBe(textTag)
        })
    })

    it('render with the correct variation', () => {
        const { rerender } = render(
            <Text variant={variation} text={defaultPlainText} />
        )

        Object.keys(TextVariations).map((variation) => {
            rerender(
                <Text
                    variant={variation as keyof typeof TextVariations}
                    text={defaultPlainText}
                />
            )

            expect(screen.getByText(defaultPlainText)).toHaveClass(
                `${variation} ${defaultColor}`
            )
        })
    })

    it('render with the correct color', () => {
        const { rerender } = render(
            <Text variant={variation} text={defaultPlainText} />
        )

        Object.keys(Colors).map((colorKey) => {
            rerender(
                <Text
                    variant={variation}
                    text={defaultPlainText}
                    color={colorKey as keyof typeof Colors}
                />
            )

            const textElement = screen.getByText(defaultPlainText)
            expect(textElement).toHaveClass(`${variation} ${colorKey}`)
        })
    })
})
