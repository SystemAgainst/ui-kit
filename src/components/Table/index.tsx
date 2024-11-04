import "./style.css";
import { useState } from "react";
import tableData1 from "./data/index.json"
import { TableBody, TableHead } from "./components";
import {IColumns} from "./components/TableHead.tsx";


const Table = () => {
    const [tableData, setTableData] = useState(tableData1);

    const columns: IColumns[] = [
        { label: "Full Name", accessor: "full_name" },
        { label: "Email", accessor: "email" },
        { label: "Gender", accessor: "gender" },
        { label: "Age", accessor: "age" },
        { label: "Start date", accessor: "start_date" },
    ];

    return (
        <table className="table">
            <caption>
                Developers currently enrolled in this course, column headers are sortable.
            </caption>
            <TableHead columns={columns} />
            <TableBody columns={columns} tableData={tableData}/>
        </table>

    );
};

export default Table;