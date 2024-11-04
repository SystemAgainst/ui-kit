import {LabelType, OrderEnum, OrderType} from "../types.ts";
import styles from "../style/style.module.css";
import TableHeadCell from "./TableHeadCell.tsx";


type PropsType = {
    labels: LabelType[];
    orderObj: OrderType;
};

const TableHead = ({ labels, orderObj }: PropsType) => {
    const handleLabelClick = (label: LabelType) => {
        if (!label.noSort) {
            handleSortChange(label.value as string);
        }
    };

    const handleSortChange = (field: string) => {
        const isAsc = orderObj.orderBy === field && orderObj.order === OrderEnum.asc;

        orderObj.setOrder(isAsc
            ? OrderEnum.desc
            : OrderEnum.asc
        );

        orderObj.setOrderBy(field);
    };

    return (
        <thead className={styles.tableHead}>
            <tr className={styles.tableRow}>
                {labels.map((label) => (
                    <TableHeadCell
                        key={label.value}
                        sortable={!label.noSort}
                        active={orderObj.orderBy === label.value}
                        direction={orderObj.order}
                        onClick={() => handleLabelClick(label)}
                    >
                        <span>{label.label}</span>
                    </TableHeadCell>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;