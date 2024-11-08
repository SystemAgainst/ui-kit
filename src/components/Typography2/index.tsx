import React from 'react'
import styles from './Typography.module.css'

type TypographyProps = {
	variant: string
	children: React.ReactNode
}

const Typography2 = ({ variant, children }: TypographyProps) => {
	return <div className={styles[variant]}>{children}</div>
}

export default Typography2
