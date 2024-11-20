import { useRef } from 'react'
import { ToggleButton } from './components'
import styles from './style/ToggleButton.module.css'
import { ToggleButtonGroupProps } from './types'
import cn from 'classnames'
import { TOGGLE_BUTTONS_SIZES, TOGGLE_BUTTONS_VARIANTS } from './constants'

const ToggleButtonGroup = (props): ToggleButtonGroupProps => {
	const {
		options,
		className,
		disabled = false,
		onBlur,
		variant = TOGGLE_BUTTONS_VARIANTS.CONTAINED,
		size = TOGGLE_BUTTONS_SIZES.MEDIUM,
		testId = TOGGLE_BUTTON_TEST_ID,
		onOptionClick,
	} = props

	const toggleButtonRef = useRef<HTMLDivElement>(null);

	const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
		event.stopPropagation();
		
		if (!toggleButtonRef.current?.contains(event.relatedTarget)) {
				onBlur?.(event);
		}
	};


	return (
		<div 
			className={cn(styles.toggleButton, className)}
			data-test-id={testId}
			tabIndex={-1}
			onBlur={handleBlur}
      ref={toggleButtonRef}
		>
			<div 
				className={styles.wrapper}
				data-test-id={`${testId}_toggle-button-wrapper`}
			>
				{
					options.map((toggleButton, index) => (
						<ToggleButton 
							key={toggleButton.id || index}
							variant={variant}
							size={size}
							option={toggleButton}
							disabled={disabled || toggleButton.disabled}
							onClick={onOptionClick}
						/>
					))
				}
			</div>
		</div>
	)
}

export default ToggleButtonGroup
