import { ChangeEvent, useState } from 'react'
import { Text } from '../Text'
import textStyles from '../Text/Text.module.scss'

export type TextInputProps = {
    id: string
    label?: string
    placeholder?: string
    initialValue?: string
}

export const TextInput = ({
    id,
    label,
    placeholder,
    initialValue = '',
}: TextInputProps) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)

    return (
        <>
            {label && (
                <label htmlFor={id}>
                    <Text as="span" text={label} variant="bodyS" />
                </label>
            )}
            <input
                id={label ? id : undefined}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={textStyles.bodyS}
            />
        </>
    )
}
