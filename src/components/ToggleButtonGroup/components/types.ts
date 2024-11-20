import { ToggleButtonSizes, ToggleButtonVariants } from '../types'

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

export type ToggleButtonProps<T = unknown> = {
	item: ToggleButton<T>
	variant?: ToggleButtonVariants
	size?: ToggleButtonSizes
	onClick: (option: ToggleButton<T>) => void
	disabled?: boolean
}

export type StyledState = {
	checked?: boolean;
	size?: ToggleButtonSizes;
	variant?: ToggleButtonVariants;
	hovered: boolean;
	disabled?: boolean;
};
