import React, { useState } from 'react'
import styles from './carousel.module.css'

type CarouselProps = {
	items: React.ReactNode[]
	showArrows?: boolean
	visibleItems?: number
}

const Carousel = (props: CarouselProps) => {
	const { items, visibleItems = 1, showArrows = true } = props

	const [activeIndex, setActiveIndex] = useState(0)

	const totalItems = items.length
	const maxIndex = Math.max(totalItems - visibleItems, 0)

	const changeIndex = (direction: 'next' | 'prev') => {
		setActiveIndex((prevIndex) =>
			direction === 'next' ? Math.min(prevIndex + 1, maxIndex) : Math.max(prevIndex - 1, 0),
		)
	}

	return (
		<div className={styles.carouselWrapper}>
			{showArrows && (
				<>
					<button
						className={`${styles.carouselButton} ${styles.previousButton}`}
						onClick={() => changeIndex('prev')}
						disabled={activeIndex === 0}
					>
						&lt;
					</button>
					<button
						className={`${styles.carouselButton} ${styles.nextButton}`}
						onClick={() => changeIndex('next')}
						disabled={activeIndex === maxIndex}
					>
						&gt;
					</button>
				</>
			)}
			<div className={styles.carousel}>
				<div
					className={styles.carouselContent}
					style={{
						transform: `translateX(-${(activeIndex * 100) / visibleItems}%)`,
						'--visible-items': visibleItems.toString(),
						'--card-gap': '16px',
					}}
				>
					{items.map((item, index) => (
						<div key={index} className={styles.carouselItem}>
							{item}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Carousel
