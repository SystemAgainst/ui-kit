import cn from 'classnames'
import { Fragment, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '../index'
import styles from './style.module.css'
import { BreadcrumbsPropsType } from './types'

const Breadcrumbs = ({ ...props }: BreadcrumbsPropsType) => {
	const { items = [], maxItems, className, style, separator = '/' } = props

	const handleOnClick: MouseEventHandler<HTMLDivElement> = (event) => {
		event.preventDefault()
		alert('You clicked a breadcrumb.')
	}

	const ellipsis = <span className={styles.ellipsis}>...</span>

	const visibleBreadcrumbs =
		maxItems && items.length > maxItems
			? [items[0], { label: ellipsis, href: undefined }, items[items.length - 1]]
			: items

	const wrapperClass = cn(className, styles.wrapper)

	const getBreadcrumbsLinkClassNames = (index: number) =>
		cn(styles.link, {
			[styles.active]: index === visibleBreadcrumbs.length - 1,
		})

	return (
		<>
			<Typography variant='displayLarge'>Breadcrumbs</Typography>
			<br />
			<div role='presentation' onClick={handleOnClick}>
				<div className={wrapperClass} style={style}>
					{visibleBreadcrumbs.map((item, index) => (
						<Fragment key={`breadcrumbs-${index}`}>
							{typeof item.label === 'string' ? (
								<Link
									className={getBreadcrumbsLinkClassNames(index)}
									to={item.href || '#'}
									aria-current={!item.href ? 'page' : undefined}
								>
									{item.label}
								</Link>
							) : (
								item.label // Отображение ReactNode, например, "..."
							)}
							{index < visibleBreadcrumbs.length - 1 && <span className={styles.separator}>{separator}</span>}
						</Fragment>
					))}
				</div>
			</div>
		</>
	)
}

export default Breadcrumbs
