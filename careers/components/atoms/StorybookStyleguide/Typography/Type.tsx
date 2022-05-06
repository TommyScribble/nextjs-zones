import React from 'react'

import { Title } from '../../Title'
import { Text } from '../../Text'

import style from './Typography.module.scss'

export const Type = () => (
    <>
        <h2 className={style.sectionHeader}>
            &apos;Interstate&apos; font for headings
        </h2>
        <Title variant="headingXXL" text="Heading XXL" />
        <Title variant="headingXL" text="Heading XL" />
        <Title variant="headingL" text="Heading L" />
        <Title variant="headingM" text="Heading M" />
        <Title variant="headingS" text="Heading S" />
        <Title variant="headingXS" text="Heading XS" />
        <Title variant="headingXXS" text="Heading XXS" />

        <h2 className={style.sectionHeader}>
            &apos;BlueStone Custom&apos; font for headings
        </h2>
        <Title variant="headingXXL" text="Heading XXL" font="blueStoneMono" />
        <Title variant="headingXL" text="Heading XL" font="blueStoneMono" />
        <Title variant="headingL" text="Heading L" font="blueStoneMono" />
        <Title variant="headingM" text="Heading M" font="blueStoneMono" />
        <Title variant="headingS" text="Heading S" font="blueStoneMono" />
        <Title variant="headingXS" text="Heading XS" font="blueStoneMono" />
        <Title variant="headingXXS" text="Heading XXS" font="blueStoneMono" />

        <h2 className={style.sectionHeader}>
            &apos;Roboto&apos; font for body text
        </h2>
        <Text variant="bodyM" text="Copy M" />
        <Text variant="bodyA11y" text="Copy A11y" />
        <Text variant="bodyS" text="Copy S" />
    </>
)
