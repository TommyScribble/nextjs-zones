import React, { useState } from 'react'

import style from './Checkbox.module.scss'

type Props = {
    name: string
    label: string
    checked?: boolean
    disabled?: boolean
    onChange?: (name: string, checked: boolean) => void
}

export const Checkbox = ({
    name,
    label,
    checked = false,
    disabled,
    onChange,
}: Props) => {
    const [isChecked, setIsChecked] = useState(checked)

    const handleChange = (name: string) => {
        setIsChecked(!isChecked)
        onChange && onChange(name, !isChecked)
    }

    return (
        <div className={style.checkbox}>
            <input
                className={style.checkboxInput}
                name={name}
                id={name}
                type="checkbox"
                onChange={() => handleChange(name)}
                checked={isChecked}
                disabled={disabled}
            />
            <label className={style.checkboxLabel} htmlFor={name}>
                {label}
            </label>
        </div>
    )
}
