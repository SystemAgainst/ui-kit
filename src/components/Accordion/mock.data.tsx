import defaultPng from './images/default.png'
import down_arrow from './images/down_arrow.png'

export const accordionItems = [
	{
		title: 'Accordion Item #1',
		content: (
			<div>
				<strong>This is the first item's accordion body.</strong> It is hidden by default, but shown
				when the title is clicked. It will also be hidden if the title is clicked again or when
				another item is clicked. You can pass HTML tags in the content such as <u>underline tag</u>,{' '}
				<i>italic</i>, or even another list like this:
				<ul>
					<li>Bread</li>
					<li>Eggs</li>
					<li>Milk</li>
				</ul>
			</div>
		),
		expandIcon: defaultPng, // Путь к иконке
		defaultExpanded: false,
		expanded: true, // Иконка справа
	},
	{
		title: 'Accordion Item #2',
		content: (
			<div>
				<strong>This is the second item's accordion body.</strong> It is hidden by default, but
				shown when the title is clicked. It will also be hidden if the title is clicked again or
				when another item is clicked. You can pass HTML tags in the content such as{' '}
				<u>underline tag</u>, <i>italic</i>, or even another list like this:
				<ul>
					<li>Bread</li>
					<li>Eggs</li>
					<li>Milk</li>
				</ul>
			</div>
		),
		expandIcon: down_arrow, // Путь к иконке
		defaultExpanded: false,
		expanded: false,
	},
	{
		title: 'Accordion Item #3',
		content: (
			<div>
				<strong>This is the third item's accordion body.</strong> It is hidden by default, but shown
				when the title is clicked. It will also be hidden if the title is clicked again or when
				another item is clicked. You can pass HTML tags in the content such as <u>underline tag</u>,{' '}
				<i>italic</i>, or even another list like this:
				<ul>
					<li>Bread</li>
					<li>Eggs</li>
					<li>Milk</li>
				</ul>
			</div>
		),
		expandIcon: down_arrow, // Путь к иконке
		defaultExpanded: false,
		expanded: false,
	},
]
