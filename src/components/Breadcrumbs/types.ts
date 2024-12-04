import { CSSProperties, ReactNode } from 'react'

export type BreadcrumbType = {
	label: string // Название хлебной крошки
	href?: string // URL для навигации (мб undefined для текущей страницы)
}

export type BreadcrumbsPropsType = {
	items?: BreadcrumbType[]
	maxItems?: number // если кол-во данных больше указанного числа, то будет указаны первый элемент, троеточие и последний элемент
	className?: string
	children?: ReactNode
	separator?: ReactNode
	style?: CSSProperties
	onClick?: () => void
}
