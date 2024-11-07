import './App.css'
import Accordion from './components/Accordion/Accordion.tsx'
import Typography from './components/Typography'
// import Table from './components/Table'
// import MockData from './components/Table/data/mock.data.ts'
import { accordionItems } from './components/Accordion/mock.data.tsx'
// import styles from './components/Table/style/style.module.css'

function App() {
	return (
		<div className='container'>
			<Accordion items={accordionItems} />
			<Typography variant={'h3'}>asdf</Typography>
			{/* <div className={styles['table-container']}>
				<Table labels={MockData.labels} orderObj={MockData.orderObj} values={MockData.values} />
			</div> */}
		</div>
	)
}

export default App
