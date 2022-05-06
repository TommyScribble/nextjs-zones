import classNames from 'classnames'
import {
    Children,
    cloneElement,
    forwardRef,
    HTMLProps,
    PropsWithChildren,
    ReactElement,
    ReactNode,
} from 'react'
import useDropdownMenu, { ItemProps } from './useDropdown'
import styles from './Select.module.scss'
import { Text } from '../Text'

type OptionProps = HTMLProps<HTMLAnchorElement> & {
    label: string
    active?: boolean
}

export const Option = forwardRef<HTMLAnchorElement, OptionProps>(
    ({ active, value, label, ...props }, ref) => (
        <li role="menuitem">
            <a
                ref={ref}
                {...props}
                className={classNames([active && styles.active])}
            >
                {label}
            </a>
        </li>
    )
)

type SelectProps = {
    label?: string
    value: string
    children?: ReactNode[]
    className?: string
}

export const Select = ({ label, value, className, children }: SelectProps) => {
    const arrayChildren = Children.toArray(children)

    const { buttonProps, isOpen, itemProps, setIsOpen } = useDropdownMenu(
        arrayChildren.length
    )

    const handleClick = () => {
        setIsOpen(false)
    }

    return (
        <div className={classNames([className, styles.buttonWrapper])}>
            <button
                tabIndex={0}
                role="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                type="button"
                className={styles.button}
                {...buttonProps}
            >
                <span>
                    {label && (
                        <Text
                            text={label}
                            variant="body"
                            color="brand_primary"
                            as="span"
                            className={styles.label}
                        />
                    )}
                    <Text
                        text={value}
                        variant="body"
                        color="brand_primary"
                        as="span"
                    />
                </span>
                <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.10742 6.21289L0.000907546 0.106377L12.2139 0.106376L6.10742 6.21289Z"
                        fill="#577E97"
                    />
                </svg>
            </button>
            <ul
                className={classNames([
                    styles.options,
                    isOpen && styles.visible,
                ])}
                role="menu"
            >
                {arrayChildren.map((child, i) => {
                    const item = child as ReactElement<
                        PropsWithChildren<OptionProps & ItemProps>
                    >
                    return cloneElement(item, {
                        ...item.props,
                        ...itemProps[i],
                        key: i,
                        onClick: (e: any) => {
                            item.props.onClick && item.props.onClick(e)
                            handleClick()
                        },
                        role: undefined,
                    })
                })}
            </ul>
        </div>
    )
}
