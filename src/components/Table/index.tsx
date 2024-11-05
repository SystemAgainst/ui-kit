import styles from "./style/style.module.css";
import {TableBody, TableHead} from "./components";
import {LabelType, OrderType, ValueType} from "./types.ts";


type PropsType = {
    values: ValueType[];
    labels: LabelType[];
    orderObj: OrderType;
};


const Table = ({ labels, values, orderObj }: PropsType) => {

    return (
        <table className={styles.name}>
            <TableHead labels={labels} orderObj={orderObj} />
            <TableBody values={values} labels={labels} />
        </table>

    );
};

export default Table;