import "./style.css";
import { TableHead } from "./components";
import {LabelType, OrderType, ValueType} from "./types.ts";


type PropsType = {
    values: ValueType[];
    labels: LabelType[];
    orderObj: OrderType;
};


const Table = ({ labels, values, orderObj }: PropsType) => {

    return (
        <table className="table">
            <caption>
                Developers currently enrolled in this course, column headers are sortable.
            </caption>
            <TableHead labels={labels} orderObj={orderObj} />
            {/*<TableBody columns={columns} tableData={tableData}/>*/}
        </table>

    );
};

export default Table;