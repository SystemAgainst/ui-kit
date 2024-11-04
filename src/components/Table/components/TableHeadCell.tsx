import React, {ReactNode} from 'react';
import classNames from 'classnames';
import styles from "../style/style.module.css";


type TableHeadCellProps = {
    active?: boolean;
    direction?: 'asc' | 'desc';
    sortable?: boolean;
    children?: ReactNode;
};

const TableHeadCell: React.FC<TableHeadCellProps> = ({ active, direction, sortable, children }) => {
    const cellClass = classNames(
        styles.tableCell,
        {
            [styles["table-cell-active"]]: active,
            [styles["table-cell-sortable"]]: sortable,
            [styles["table-cell-asc"]]: direction === 'asc' && active,
        }
    );

    return (
        <td className={cellClass}>
            {children}
            <span className="arrow-button" />
        </td>
    );
};

export default TableHeadCell;
