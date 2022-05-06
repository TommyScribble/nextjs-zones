import classNames from 'classnames'
import {
    ChangeEvent,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react'
import { Text } from '../Text'
import styles from './SearchSelectInput.module.scss'

// https://www.w3.org/TR/wai-aria-practices-1.1/examples/combobox/aria1.1pattern/listbox-combo.html

export type SearchSelectInput = {
    toogleOptionById: (id: string) => void
}

const preventMouseDown = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
}

const isKeyboardEvent = (
    e: React.KeyboardEvent | React.MouseEvent
): e is React.KeyboardEvent => (e as React.KeyboardEvent).key !== undefined

type SearchSelectedOption = { id: string; value: string }
export type SearchSelectInputProps = {
    id: string
    placeholder: string
    options: SearchSelectedOption[]
    onSelectionChange?: (optionsSelected: string[]) => any
}

export const SearchSelectInput = forwardRef<
    SearchSelectInput,
    SearchSelectInputProps
>(({ options, id, placeholder, onSelectionChange }, ref) => {
    const [filteredOptions, setFilteredOptions] = useState<
        SearchSelectedOption[]
    >(options)
    const [searchedOption, setSearchedOption] = useState('')
    const [selectedOptions, setSelectedOptions] = useState<{
        [key: string]: boolean
    }>({})
    const [currentOptionIndex, setCurrentOptionIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const filterOptions = () => {
        searchedOption.trim() === ''
            ? setFilteredOptions(options)
            : setFilteredOptions(
                  options.filter((option) =>
                      option.value.includes(searchedOption)
                  )
              )
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSearchedOption(value)
    }

    const onBlur = () => {
        setCurrentOptionIndex(0)
        setIsOpen(false)
        setSearchedOption('')
    }

    const onFocus = () => {
        setIsOpen(true)
    }

    const toggleOption = () => {
        const currentItem = filteredOptions[currentOptionIndex].id
        setSelectedOptions((prev) => ({
            ...prev,
            [currentItem]: !prev[currentItem],
        }))
        searchedOption && setSearchedOption('')
    }

    const toogleOptionById = (id: string) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    useEffect(() => {
        const allSelections = Object.entries(
            selectedOptions
        ).flatMap(([key, value]) => (value ? key : []))

        onSelectionChange && onSelectionChange(allSelections)
    }, [selectedOptions])

    useEffect(() => {
        filterOptions()
        filteredOptions.length > 0 && setCurrentOptionIndex(0)
    }, [searchedOption])

    const moveCurrentOptionIndex = (itemIndex: number): void => {
        setCurrentOptionIndex(itemIndex)
    }

    const userEventsListener = (
        e: React.KeyboardEvent | React.MouseEvent
    ): void => {
        let newOptionIndex = currentOptionIndex

        if (isKeyboardEvent(e)) {
            const { key } = e

            if (!['Enter', 'ArrowDown', 'ArrowUp', 'Escape'].includes(key)) {
                return
            }

            switch (key) {
                case 'ArrowDown':
                    const nextOptionIndex = currentOptionIndex + 1
                    if (nextOptionIndex < filteredOptions.length) {
                        newOptionIndex = nextOptionIndex
                    }
                    moveCurrentOptionIndex(newOptionIndex)
                    break
                case 'ArrowUp':
                    const previousOptionIndex = currentOptionIndex - 1
                    if (previousOptionIndex >= 0) {
                        newOptionIndex = previousOptionIndex
                    }
                    moveCurrentOptionIndex(newOptionIndex)
                    break
                case 'Enter':
                    toggleOption()
                    break
                case 'Escape':
                    inputRef?.current?.blur()
                    break
                default:
                    break
            }
        } else {
            const indexOfElement = filteredOptions.findIndex(
                (el) => el.id === e.currentTarget.id
            )
            newOptionIndex = indexOfElement
            moveCurrentOptionIndex(newOptionIndex)
        }
    }

    useImperativeHandle(ref, () => ({
        toogleOptionById: toogleOptionById,
    }))

    return (
        <div className={styles.container}>
            <input
                ref={inputRef}
                placeholder={placeholder}
                type="text"
                aria-activedescendant={
                    filteredOptions[currentOptionIndex]?.value
                }
                aria-autocomplete="both"
                aria-controls={id}
                className={styles.input}
                value={searchedOption}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                aria-labelledby={id}
                role="combobox"
                aria-owns={id}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onKeyDown={userEventsListener}
            />

            <ul
                aria-expanded={isOpen}
                role="listbox"
                id={id}
                className={styles.listbox}
            >
                {filteredOptions.map((option, i) => (
                    <li
                        key={option.id}
                        role="option"
                        id={option.id}
                        onMouseOver={userEventsListener}
                        aria-hidden={!isOpen}
                        aria-selected={!!selectedOptions[option.id]}
                        onMouseDown={preventMouseDown}
                        onClick={toggleOption}
                        className={classNames([
                            styles.option,
                            currentOptionIndex === i ? styles.highlighted : '',
                        ])}
                    >
                        <Text variant="bodyS" text={option.value} />
                        <span>
                            {!!selectedOptions[option.id] ? '   ✓' : ''}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
})
