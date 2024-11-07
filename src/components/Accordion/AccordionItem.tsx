import { FC, useState } from 'react'
import './Accordion.css'
import { AccordionData } from './types'

interface AccordionItemProps {
	data?: AccordionData
	isOpen?: boolean
	onClick?: () => void
}

const AccordionItem: FC<AccordionItemProps> = ({ data, isOpen, onClick }) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(data?.defaultExpanded || false)

	const handleClick = () => {
		setIsExpanded(prev => !prev)
		if (onClick) onClick()
	}

	const getContainerStyle = () => ({
		maxHeight: isExpanded ? '100vh' : '0px',
		overflow: 'hidden',
		transition: 'max-height 0.3s ease',
	})

	return (
		<li className={`accordion-item ${isOpen ? 'active' : ''}`}>
			<h2 className='accordion-item-title'>
				<button
					className='accordion-item-btn'
					onClick={handleClick}
					style={{ justifyContent: data?.expanded ? 'space-between' : 'flex-start' }}
				>
					{!data?.expanded && data?.expandIcon && (
						<img src={data.expandIcon} alt='expand icon' className='accordion-icon' />
					)}
					{data?.title}
					{data?.expanded && data?.expandIcon && (
						<img src={data.expandIcon} alt='expand icon' className='accordion-icon' />
					)}
				</button>
			</h2>
			<div className='accordion-item-container' style={getContainerStyle()}>
				<div className='accordion-item-content'>{data?.content}</div>
			</div>
		</li>
	)
}

export default AccordionItem
