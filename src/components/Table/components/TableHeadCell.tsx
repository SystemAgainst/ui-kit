import React, {ReactNode} from 'react';
import cn from 'classnames';
import styles from "../style/style.module.css";


type TableHeadCellProps = {
    direction?: 'asc' | 'desc';
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    active?: boolean;
    sortable?: boolean;
};

const TableHeadCell: React.FC<TableHeadCellProps> = ({ active, direction, sortable, children, onClick, className }) => {
    const getHeadCellClassNames = cn(
        className,
        styles["table-head-cell"],
        {
            [styles["table-cell-active"]]: active,
            [styles["table-cell-sortable"]]: sortable,
            [styles["table-cell-asc"]]: direction === 'asc' && active,
        }
    );

    return (
        <td className={getHeadCellClassNames} onClick={onClick}>
            {children}
            <span className="arrow-button" />
        </td>
    );
};

export default TableHeadCell;
