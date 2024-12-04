import { createBrowserRouter } from 'react-router-dom'
import { Accordion, Breadcrumbs, Table } from '../components'
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
		path: '/breadcrumbs',
		element: <Breadcrumbs />,
	},
])

export default router
