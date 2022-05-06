import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { act } from 'react-dom/test-utils'

import { SearchSelectInput } from '.'
import { searchSelectInputDummyOptions } from './SearchSelectInput.data'

const HIGHLIGHTED_CLASS = 'highlighted'
const PLACEHOLDER_TEXT = 'Search by option'
const SEARCH_SELECT_ID = 'test'

describe('As a SearchSelectInput', () => {
    it('renders the search input', () => {
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )
        const searchInput = screen.getByRole('combobox')
        expect(searchInput).toBeInTheDocument()
    })

    it('renders correct placeholder in the search input', () => {
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )
        const searchInput = screen.getByPlaceholderText(PLACEHOLDER_TEXT)
        expect(searchInput).toBeInTheDocument()
    })

    it('do not show the list of options while the input is not focus', () => {
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )

        const options = screen.queryAllByRole('option')
        expect(options.length).toBe(0)
    })

    it('shows the list of options when focus the input', () => {
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )

        const searchInput = screen.getByRole('combobox')
        searchInput.focus()

        const options = screen.getAllByRole('option')
        expect(options).toHaveLength(searchSelectInputDummyOptions.length)
    })

    it('renders the correct ammount of options', () => {
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )

        const searchInput = screen.getByRole('combobox')
        searchInput.focus()

        const options = screen.getAllByRole('option')
        expect(options).toHaveLength(searchSelectInputDummyOptions.length)
    })

    it('filter the options that matchs with the text typed by the user', () => {
        const searchedText = searchSelectInputDummyOptions[0].value
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )
        const searchInput = screen.getByRole('combobox')
        userEvent.type(searchInput, searchedText)

        const options = screen.getAllByRole('option')
        const amountOfOptions = searchSelectInputDummyOptions.filter((option) =>
            option.value.includes(searchedText)
        )
        expect(options.length).toBe(amountOfOptions.length)
    })

    // TODO: TAKE A LOOK ON THIS WHEN DESIGNS ARE READY
    it('cleans search input on blur', () => {
        const searchedText = searchSelectInputDummyOptions[0].value
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )
        const searchInput = screen.getByRole('combobox')
        userEvent.type(searchInput, searchedText)

        searchInput.blur()

        expect(searchInput).toHaveValue('')
    })

    it('recover the original options when the user clean the input', () => {
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )
        const searchInput = screen.getByRole('combobox')
        userEvent.type(searchInput, 'f')

        let options = screen.queryAllByRole('option')
        expect(options.length).toBe(0)

        userEvent.keyboard('{backspace}')

        options = screen.getAllByRole('option')
        expect(options.length).toBe(searchSelectInputDummyOptions.length)
    })

    it('shows the fist option highlighted on focus the input', () => {
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )

        const searchInput = screen.getByRole('combobox')
        searchInput.focus()

        const firstOption = screen.getByRole('option', {
            name: searchSelectInputDummyOptions[0].value,
        })

        expect(firstOption).toHaveClass(HIGHLIGHTED_CLASS)
    })

    it('always highlight the first option available while the user is typing', () => {
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )

        const searchInput = screen.getByRole('combobox')
        searchInput.focus()

        userEvent.keyboard('{arrowdown}')
        const secondOption = screen.getByRole('option', {
            name: searchSelectInputDummyOptions[1].value,
        })

        expect(secondOption).toHaveClass(HIGHLIGHTED_CLASS)

        userEvent.type(searchInput, searchSelectInputDummyOptions[0].value)

        const firstOption = screen.getByRole('option', {
            name: searchSelectInputDummyOptions[0].value,
        })

        expect(firstOption).toHaveClass(HIGHLIGHTED_CLASS)
    })

    it('on toggle option clean search input', () => {
        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )

        const searchInput = screen.getByRole('combobox')
        searchInput.focus()
        userEvent.type(searchInput, searchSelectInputDummyOptions[0].value)

        const options = screen.getAllByRole('option')
        userEvent.click(options[0])

        expect(searchInput).toHaveValue('')
    })

    it('on toggle a option call the function "onSelectionChange" with the options selected', () => {
        const onSelectionChange = jest.fn()

        render(
            <SearchSelectInput
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
                onSelectionChange={onSelectionChange}
            />
        )

        const searchInput = screen.getByRole('combobox')
        searchInput.focus()

        userEvent.keyboard('{arrowdown}')
        userEvent.keyboard('{enter}')
        expect(onSelectionChange).toBeCalledWith([
            searchSelectInputDummyOptions[1].id,
        ])
    })

    it('toggle a option by id using the exposed function toogleOptionById', () => {
        const ref = createRef<SearchSelectInput>()

        render(
            <SearchSelectInput
                ref={ref}
                id={SEARCH_SELECT_ID}
                placeholder={PLACEHOLDER_TEXT}
                options={searchSelectInputDummyOptions}
            />
        )

        const searchInput = screen.getByRole('combobox')
        searchInput.focus()

        const options = screen.getAllByRole('option')

        userEvent.type(searchInput, '{enter}')
        expect(options[0]).toHaveAttribute('aria-selected', 'true')

        act(() => {
            ref.current?.toogleOptionById(searchSelectInputDummyOptions[0].id)
        })

        expect(options[0]).toHaveAttribute('aria-selected', 'false')
    })

    describe('when using the keyboard', () => {
        it('shows the next option highlighted when the user press ArrowDown on the keyboard', () => {
            render(
                <SearchSelectInput
                    id={SEARCH_SELECT_ID}
                    placeholder={PLACEHOLDER_TEXT}
                    options={searchSelectInputDummyOptions}
                />
            )

            const searchInput = screen.getByRole('combobox')
            searchInput.focus()

            userEvent.keyboard('{arrowdown}')
            const secondOption = screen.getByRole('option', {
                name: searchSelectInputDummyOptions[1].value,
            })

            expect(secondOption).toHaveClass(HIGHLIGHTED_CLASS)
        })

        it('keeps the last option highlighted if the user press ArrowDown when the last option is already highlighted', () => {
            render(
                <SearchSelectInput
                    id={SEARCH_SELECT_ID}
                    placeholder={PLACEHOLDER_TEXT}
                    options={[searchSelectInputDummyOptions[0]]}
                />
            )

            const searchInput = screen.getByRole('combobox')
            searchInput.focus()

            userEvent.keyboard('{arrowdown}')
            const lastOption = screen.getByRole('option', {
                name: searchSelectInputDummyOptions[0].value,
            })

            expect(lastOption).toHaveClass(HIGHLIGHTED_CLASS)
        })

        it('shows the previous option highlighted when the user press ArrowUp on the keyboard', () => {
            render(
                <SearchSelectInput
                    id={SEARCH_SELECT_ID}
                    placeholder={PLACEHOLDER_TEXT}
                    options={searchSelectInputDummyOptions}
                />
            )

            const searchInput = screen.getByRole('combobox')
            searchInput.focus()

            // Selecting the second option first, then test if it will come back to the previous
            userEvent.keyboard('{arrowdown}')
            const secondOption = screen.getByRole('option', {
                name: searchSelectInputDummyOptions[1].value,
            })
            expect(secondOption).toHaveClass(HIGHLIGHTED_CLASS)

            userEvent.keyboard('{arrowup}')
            const firstOption = screen.getByRole('option', {
                name: searchSelectInputDummyOptions[0].value,
            })

            expect(firstOption).toHaveClass(HIGHLIGHTED_CLASS)
        })

        it('keeps the first option highlighted if the user press ArrowUp when the first option is already highlighted', () => {
            render(
                <SearchSelectInput
                    id={SEARCH_SELECT_ID}
                    placeholder={PLACEHOLDER_TEXT}
                    options={searchSelectInputDummyOptions}
                />
            )

            const searchInput = screen.getByRole('combobox')
            searchInput.focus()

            userEvent.keyboard('{arrowup}')
            const firstOption = screen.getByRole('option', {
                name: searchSelectInputDummyOptions[0].value,
            })

            expect(firstOption).toHaveClass(HIGHLIGHTED_CLASS)
        })

        it('toogle the option when the user press Enter', () => {
            render(
                <SearchSelectInput
                    id={SEARCH_SELECT_ID}
                    placeholder={PLACEHOLDER_TEXT}
                    options={searchSelectInputDummyOptions}
                />
            )
            const searchInput = screen.getByRole('combobox')
            searchInput.focus()
            const options = screen.getAllByRole('option')

            userEvent.type(searchInput, '{enter}')
            expect(options[0]).toHaveAttribute('aria-selected', 'true')

            userEvent.type(searchInput, '{enter}')
            expect(options[0]).toHaveAttribute('aria-selected', 'false')
        })

        it('leave the component when press Escape', () => {
            render(
                <SearchSelectInput
                    id={SEARCH_SELECT_ID}
                    placeholder={PLACEHOLDER_TEXT}
                    options={searchSelectInputDummyOptions}
                />
            )

            const searchInput = screen.getByRole('combobox')
            searchInput.focus()

            expect(searchInput).toHaveFocus()

            userEvent.type(searchInput, '{escape}')
            expect(searchInput).not.toHaveFocus()
        })
    })

    describe('when using mouse', () => {
        it('show the option highlighted when the mouse hover', () => {
            render(
                <SearchSelectInput
                    id={SEARCH_SELECT_ID}
                    placeholder={PLACEHOLDER_TEXT}
                    options={searchSelectInputDummyOptions}
                />
            )

            const searchInput = screen.getByRole('combobox')
            searchInput.focus()

            const secondOption = screen.getByRole('option', {
                name: searchSelectInputDummyOptions[1].value,
            })
            userEvent.hover(secondOption)

            expect(secondOption).toHaveClass(HIGHLIGHTED_CLASS)
        })

        it('toogle the option when the user click in a option', () => {
            render(
                <SearchSelectInput
                    id={SEARCH_SELECT_ID}
                    placeholder={PLACEHOLDER_TEXT}
                    options={searchSelectInputDummyOptions}
                />
            )
            const searchInput = screen.getByRole('combobox')
            searchInput.focus()
            const options = screen.getAllByRole('option')

            userEvent.click(options[0])
            expect(options[0]).toHaveAttribute('aria-selected', 'true')

            userEvent.click(options[0])
            expect(options[0]).toHaveAttribute('aria-selected', 'false')
        })
    })
})
