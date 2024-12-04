import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Accordion, Breadcrumbs, Table, Typography } from './components'
import { accordionItems } from './components/Accordion/mock.data'
import MockData from './components/Table/data/mock.data'
import styles from './components/Table/style/style.module.css'
import BasicLayout from './layouts/BasicLayout'
import { breadcrumbsData } from './components/Breadcrumbs/breadcrumbs.data'

const App: React.FC = () => (
	<BasicLayout>
		<Routes>
			<Route path='/accordion' element={<Accordion items={accordionItems} />} />

			<Route
				path='/table'
				element={<div className={styles['table-container']}>
					<Table labels={MockData.labels} orderObj={MockData.orderObj} values={MockData.values} />
				</div>} />

			<Route path='/typography' element={<Typography variant='displayLarge'>asdf</Typography>} />

			<Route path='/breadcrumbs' element={<Breadcrumbs maxItems={2} items={breadcrumbsData} />} />
		</Routes>
	</BasicLayout>
)

export default App
