import { CSSProperties, ReactNode } from 'react'

export type BreadcrumbType = {
	label: string // Название хлебной крошки
	href?: string // URL для навигации (мб undefined для текущей страницы)
}

export type BreadcrumbsPropsType = {
	items?: BreadcrumbType[]
	className?: string
	children?: ReactNode
	separator?: ReactNode
	style?: CSSProperties
	onClick?: () => void
}