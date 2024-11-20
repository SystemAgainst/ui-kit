import { TOGGLE_BUTTONS_SIZES, TOGGLE_BUTTONS_VARIANTS } from './constants'

type Values<T> = T[keyof T]

export type ToggleButtonVariants = Values<typeof TOGGLE_BUTTONS_VARIANTS>
export type ToggleButtonSizes = Values<typeof TOGGLE_BUTTONS_SIZES>

export type FocusEventHandler = (event: FocusEvent<HTMLDivElement>) => void

export type ToggleButtonProps<T = unknown> = CommonToggleButtonProps<T> & {
	value: T | null
	onChange?: (value: T | null) => void
}

export type MultiToggleButtonGroupProps<T = unknown> = CommonToggleButtonGroupProps<T> & {
	value: T[]
	onChange?: (value: T[]) => void
}

export type ToggleButton<T = unknown> = {
	id?: string
	testId?: string
	label: string
	value: T
	className?: string
	badge?: string
	onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void
	onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void
	onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => void
	onMouseUp?: (event: MouseEvent<HTMLButtonElement>) => void
	checked?: boolean
	disabled?: boolean
}

export type CommonToggleButtonGroupProps<T = unknown> = {
	testId?: string
	className?: string
	variant?: ToggleButtonVariants
	size?: ToggleButtonSizes
	options: ToggleButton<T>[]
	onBlur?: FocusEventHandler
	onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void
	onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => void
	onMouseUp?: (event: MouseEvent<HTMLButtonElement>) => void
	disabled?: boolean
	unchecked?: boolean
}

export type ToggleButtonGroupProps<T = unknown> = Omit<CommonToggleButtonGroupProps<T>, 'unchecked'> & {
	onOptionClick: (clickedOption: ToggleButton<T>) => void
}
