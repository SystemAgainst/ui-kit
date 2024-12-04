import cn from 'classnames'
import { Fragment, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '../index'
import styles from './style.module.css'
import { BreadcrumbsPropsType } from './types'

const Breadcrumbs = ({ ...props }: BreadcrumbsPropsType) => {
	const { items = [], className, style, children, separator = "/" } = props

	const handleOnClick = (event: MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault()
		alert('You clicked a breadcrumb.')
	}

	const wrapperClass = cn(className, styles.wrapper);

	return (
		<>
			<Typography variant='displayLarge'>Breadcrumbs</Typography>
			<br />
			<div role='presentation' onClick={handleOnClick}>
				<div className={wrapperClass} style={style}>
					{
						items.map((item, index) => (
							<Fragment key={`breadcrumbs-${index}`}>
								<Link
										className={styles.link}
										to={item.href || '#'}
										aria-current={!item.href ? 'page' : undefined}
									>
										{item.label}
								</Link>
								{index < items.length - 1 && 
									<span className={styles.separator}>{separator}</span>
								}
							</Fragment>
						))
					}
				</div>
			</div>
		</>
	)
}

export default Breadcrumbs
