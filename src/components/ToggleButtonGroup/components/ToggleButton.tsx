import { useState } from 'react'
import styles from '../style/ToggleButton.module.css'
import { ToggleButtonProps } from './types'
import cn from 'classnames'

const ToggleButton = (props: ToggleButtonProps) => {
	const {
		item,
		variant,
		size,
		onClick,
		disabled,
		option: {
			checked,
			className,
			label,
			testId = "toggle-button-btn",
			onMouseDown,
			onMouseEnter,
			onMouseLeave,
			onMouseUp,
			Icon,
			badge,
		},
	} = props

	const [hovered, setHover] = useState(false);

	const styledState = {
		checked,
		disabled,
		hovered,
			size,
		variant,
};

	const handleMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
		setHover(true)
		onMouseEnter?.(event)
	}

	const handleMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
		setHover(false)
		onMouseLeave?.(event)
	}

	const handleClick = () => {
		onClick({ ...item, checked: !checked })
	}
	return (
		<div className={styles.toggleButton}>
			<div className={styles.wrapper}>
				<button 
				  data-test-id={testId}
					className={cn(styles.buttonWrapper, className)}
					onClick={disabled ? undefined : handleClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onMouseDown={onMouseDown}
					onMouseUp={onMouseUp}
					disabled={disabled}
					className={className}
					checked={checked}
				>
					<span className={styles.label}>{children}</span>
				</button>
			</div>
		</div>
	)
}

export default ToggleButton
