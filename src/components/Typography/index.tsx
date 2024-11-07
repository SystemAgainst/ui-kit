import { createElement } from 'react'
import styles from './Typography.module.css'
import { TypographyVariantEnum } from './types'

type PropsType = {
	variant?: TypographyVariantEnum
	color?: string
	bold?: boolean
	fontSize?: number
	lineHeight?: number
	fontFamily?: string
	margin?: number | string
	padding?: number | string
	children: React.ReactNode | React.ReactNode[]
}

const Typography = ({
	variant = TypographyVariantEnum.p,
	color,
	bold,
	fontSize,
	lineHeight,
	fontFamily,
	margin,
	padding,
	children,
}: PropsType) => {
	const style = {
		color: color || undefined,
		fontSize: fontSize ? `${fontSize}px` : undefined,
		lineHeight: lineHeight ? `${lineHeight}%` : undefined,
		fontFamily: fontFamily || undefined,
		margin: margin ? `${margin}px` : undefined,
		padding: padding ? `${padding}px` : undefined,
	}

	const className = `${styles.typography} ${bold ? styles.bold : ''}`

	return createElement(variant, { className, style }, children)
}

export default Typography
