import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Accordion, Breadcrumbs, Carousel, Table, Typography } from './components'
import { accordionItems } from './components/Accordion/mock.data'
import { breadcrumbsData } from './components/Breadcrumbs/breadcrumbs.data'
import MockData from './components/Table/data/mock.data'
import styles from './components/Table/style/style.module.css'
import BasicLayout from './layouts/BasicLayout'

const App: React.FC = () => (
	<BasicLayout>
		<Routes>
			<Route path='/accordion' element={<Accordion items={accordionItems} />} />

			<Route
				path='/table'
				element={
					<div className={styles['table-container']}>
						<Table labels={MockData.labels} orderObj={MockData.orderObj} values={MockData.values} />
					</div>
				}
			/>

			<Route path='/typography' element={<Typography variant='displayLarge'>asdf</Typography>} />

			<Route path='/breadcrumbs' element={<Breadcrumbs maxItems={2} items={breadcrumbsData} />} />

			<Route
				path='/carousel'
				element={
					<Carousel
						items={[
							<div style={{ background: 'red', height: '200px' }}>Item 1</div>,
							<div style={{ background: 'blue', height: '200px' }}>Item 2</div>,
							<div style={{ background: 'green', height: '200px' }}>Item 3</div>,
						]}
						showArrows={true}
						visibleItems={1}
					/>
				}
			/>
		</Routes>
	</BasicLayout>
)

export default App
