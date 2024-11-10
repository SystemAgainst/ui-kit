import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Accordion, Table, Typography } from './components'
import { accordionItems } from './components/Accordion/mock.data'
import MockData from './components/Table/data/mock.data'
import styles from './components/Table/style/style.module.css'
import BasicLayout from './layouts/BasicLayout'

const App: React.FC = () => {
	return (
		<BasicLayout>
			<Routes>
				<Route path='/accordion' element={<Accordion items={accordionItems} />} />
				<Route
					path='/table'
					element={
						<div className={styles['table-container']}>
							<Table
								labels={MockData.labels}
								orderObj={MockData.orderObj}
								values={MockData.values}
							/>
						</div>
					}
				/>
				<Route path='/typography' element={<Typography variant='displayLarge'>asdf</Typography>} />
			</Routes>
		</BasicLayout>
	)
}

export default App
