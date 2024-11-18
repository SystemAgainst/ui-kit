import { createBrowserRouter } from 'react-router-dom'
import { Accordion, Table, ToggleButtonGroup } from '../components'
import { accordionItems } from '../components/Accordion/mock.data'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Table />,
	},
	{
		path: '/accordion',
		element: <Accordion items={accordionItems} />,
	},
	{
		path: '/table',
		element: <Table />,
	},
	{
		path: '/toggle-button',
		element: <ToggleButtonGroup />,
	},
])

export default router
