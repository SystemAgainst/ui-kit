import './App.css';
import Accordion from "./components/Accordion/Accordion.tsx";
import Table from "./components/Table";
import MockData from "./components/Table/data/mock.data.ts";
import { accordionItems } from "./components/Accordion/mock.data.tsx";



function App() {
  return (
    <div className="container">
        <Accordion items={accordionItems} />
        <div></div>
        <div className="table_container">
            <h1>Sortable table with React</h1>
            <Table labels={MockData.labels} orderObj={MockData.orderObj} values={MockData.values} />
        </div>
    </div>
  )
}

export default App
