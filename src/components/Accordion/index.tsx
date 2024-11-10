import { FC, useState } from 'react'
import './Accordion.css'
import AccordionItem from './AccordionItem.tsx'
import { AccordionData } from './types'

const Accordion: FC<{ items: Array<AccordionData> }> = ({ items }) => {
	const [currentIdx, setCurrentIdx] = useState<number | null>(null)

	const handleClick = (index: number) => {
		setCurrentIdx(currentValue => (currentValue !== index ? index : null))
	}

	return (
		<ul className='accordion'>
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					data={item}
					isOpen={currentIdx === index}
					onClick={() => handleClick(index)}
				/>
			))}
		</ul>
	)
}

export default Accordion
