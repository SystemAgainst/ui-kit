type TableHeadProps = {
    columns: IColumns[];
}

export interface IColumns {
    label: string;
    accessor: string;
}

const TableHead = ({ columns }: TableHeadProps) => {
    return (
        <thead>
            <tr>
                {columns.map(({ label, accessor }) => {
                    return <th key={accessor}>{label}</th>;
                })}
            </tr>
        </thead>
    );
};

export default TableHead;