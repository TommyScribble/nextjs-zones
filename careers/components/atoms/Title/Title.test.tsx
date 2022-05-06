import { render, screen } from '@testing-library/react'
import { TitleFonts, TitleTags, TitleVariations } from './Title.types'
import { Title, titleTypography } from '.'
import { Colors } from '../../../careers/typings/utilities'

const defaultTitleVariation: keyof typeof TitleVariations = 'headingL'
const defaultPlainText = 'Testing text component'
const defaultColor: keyof typeof Colors = 'utility_greydark'
const defaultFont: keyof typeof TitleFonts = 'blueStoneMono'

describe('As Title component', () => {
    it('renders a plain string', () => {
        render(
            <Title variant={defaultTitleVariation} text={defaultPlainText} />
        )
        expect(screen.getByText(defaultPlainText)).toBeInTheDocument()
    })

    it('render with the correct default classes', async () => {
        render(
            <Title variant={defaultTitleVariation} text={defaultPlainText} />
        )

        expect(screen.getByText(defaultPlainText)).toHaveClass(
            `${defaultTitleVariation} ${defaultFont} ${defaultColor}`
        )
    })

    it('render with the correct tag', () => {
        const { rerender } = render(
            <Title variant={defaultTitleVariation} text={defaultPlainText} />
        )

        Object.keys(TitleTags).map((titleTag) => {
            rerender(
                <Title
                    variant={defaultTitleVariation}
                    text={defaultPlainText}
                    as={titleTag as keyof typeof TitleTags}
                />
            )

            const tag = screen.getByText(defaultPlainText)
            expect(tag.nodeName.toLowerCase()).toBe(titleTag)
        })
    })

    it('render with the correct variation and associated tag', () => {
        const { rerender } = render(
            <Title variant={defaultTitleVariation} text={defaultPlainText} />
        )

        Object.keys(TitleVariations).map((variation) => {
            rerender(
                <Title
                    variant={variation as keyof typeof TitleVariations}
                    text={defaultPlainText}
                />
            )

            const tag = screen.getByText(defaultPlainText)
            expect(tag.nodeName.toLowerCase()).toBe(
                titleTypography[variation as keyof typeof titleTypography]
            )

            expect(screen.getByText(defaultPlainText)).toHaveClass(
                `${variation} ${defaultFont} ${defaultColor}`
            )
        })
    })

    it('render with the correct color', () => {
        const { rerender } = render(
            <Title variant={defaultTitleVariation} text={defaultPlainText} />
        )

        Object.keys(Colors).map((colorKey) => {
            rerender(
                <Title
                    variant={defaultTitleVariation}
                    text={defaultPlainText}
                    color={colorKey as keyof typeof Colors}
                />
            )

            const titleElement = screen.getByText(defaultPlainText)
            expect(titleElement).toHaveClass(
                `${defaultTitleVariation} ${defaultTitleVariation} ${colorKey}`
            )
        })
    })
})
