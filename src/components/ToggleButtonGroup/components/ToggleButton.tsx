import { ReactNode } from 'react'
import styles from '../style/ToggleButton.module.css'

type ToggleButtonPropsType = {
	children?: ReactNode
}

const ToggleButton = (props: ToggleButtonPropsType) => {
	const { children } = props

	return (
		<div className={styles.toggleButton}>
			<div className={styles.wrapper}>
				<button className={styles.buttonWrapper}>
					<span className={styles.label}>{children}</span>
				</button>
			</div>
		</div>
	)
}

export default ToggleButton
