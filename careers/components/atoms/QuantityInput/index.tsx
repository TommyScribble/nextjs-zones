import classNames from 'classnames'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'
import styles from './QuantityInput.module.scss'

type QuantityInputProps = {
    minQuantity?: number
    maxQuantity?: number
    initialQuantity?: number
    disableCostumValue?: boolean
    errorMessageId: string
}

export const QuantityInput = ({
    maxQuantity,
    initialQuantity = 1,
    disableCostumValue = false,
    errorMessageId,
    ...props
}: QuantityInputProps) => {
    const [quantity, setQuantity] = useState<number | string>(initialQuantity)
    const [error, setError] = useState('')
    const minQuantity =
        props?.minQuantity && props.minQuantity >= 0 ? props.minQuantity : 0

    // --- validations block
    const isNumber = (value: string) => {
        let onlyNumbersPattern = new RegExp('^[0-9]+$')
        return onlyNumbersPattern.test(value)
    }
    const isEmptyString = (value: string) => value === ''
    const higherThanMaxQuantity = (value: number) =>
        maxQuantity !== undefined && value > maxQuantity
    const lowerThanMinQuantity = (value: number) => value < minQuantity
    const isValid = (value: string) =>
        !isEmptyString(value.toString()) &&
        !higherThanMaxQuantity(+value) &&
        !lowerThanMinQuantity(+value)
    // --- end validations block

    const validateInput = (value: string) => {
        if (higherThanMaxQuantity(+value)) {
            setError('Higher than maximum quantity')
        }

        if (!isEmptyString(value) && lowerThanMinQuantity(+value)) {
            setError('Lower than minimum quantity')
        }

        if (isValid(value) && error !== '') {
            return setError('')
        }
    }

    const increaseQuantity = () => {
        if (higherThanMaxQuantity(+quantity + 1)) return
        validateInput((+quantity + 1).toString())
        typeof quantity === 'number' && setQuantity(+quantity + 1)
    }

    const decreaseQuantity = () => {
        if (lowerThanMinQuantity(+quantity - 1)) return
        validateInput((+quantity - 1).toString())
        typeof quantity === 'number' && setQuantity(+quantity - 1)
    }

    const setCustomQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        validateInput(value)

        if (isEmptyString(value)) {
            setQuantity('')
        }

        if (isNumber(value)) {
            setQuantity(+value)
        }
    }

    const onSubmit = (e: SyntheticEvent) => e.preventDefault()

    const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        validateInput(value)

        if (isEmptyString(value)) {
            setQuantity(initialQuantity ?? minQuantity)
        }
    }

    return (
        <>
            <form className={styles.form} onSubmit={onSubmit}>
                <button
                    type="button"
                    onClick={decreaseQuantity}
                    className={styles.buttons}
                >
                    <span className="visuallyHidden">decrease quantity</span>
                    <Icon
                        iconName="IconArrow"
                        color="brand_primary"
                        className={styles.backButton}
                    />
                </button>

                <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    onChange={setCustomQuantity}
                    onBlur={onBlur}
                    className={styles.input}
                    readOnly={disableCostumValue}
                    aria-describedby={errorMessageId}
                />

                <button
                    type="button"
                    onClick={increaseQuantity}
                    className={styles.buttons}
                >
                    <span className="visuallyHidden">increase quantity</span>
                    <Icon iconName="IconArrow" color="brand_primary" />
                </button>
            </form>

            <Text
                variant="bodyS"
                text={error || quantity.toString()}
                className={classNames([styles.error, !error && styles.hidden])}
                role="alert"
                id={errorMessageId}
                aria-hidden="false"
            />
        </>
    )
}
