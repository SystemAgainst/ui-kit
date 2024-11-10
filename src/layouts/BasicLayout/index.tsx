import React from 'react'
import Sidebar from '../../components/Sidebar'
import styles from './BasicLayout.module.css'

interface BasicLayoutProps {
	children: React.ReactNode
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<aside className={styles.sidebar}>
				<Sidebar />
			</aside>
			<main className={styles.content}>{children}</main>
		</div>
	)
}

export default BasicLayout
