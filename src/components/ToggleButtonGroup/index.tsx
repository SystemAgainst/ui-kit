import { ToggleButton } from './components'
import styles from './style/ToggleButton.module.css'

const ToggleButtonGroup = () => {
	return (
		<div className={styles.toggleButton}>
			<div className={styles.wrapper}>
				<ToggleButton>hello</ToggleButton>
				<ToggleButton>Bye</ToggleButton>
			</div>
		</div>
	)
}

export default ToggleButtonGroup
