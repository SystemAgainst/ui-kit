type TableBodyProps = {
    tableData: IData[];
    columns: IColumns[];
}

interface IColumns {
    label: string;
    accessor: keyof IData;
}

interface IData {
    id: number;
    "full_name": string;
    email: string;
    gender: string;
    age: number;
    "start_date": string;
}

const TableBody = ({ tableData, columns }: TableBodyProps) => {
    return (
        <tbody>
        {tableData.map((data) => {
            return (
                <tr key={data.id}>
                    {columns.map(({ accessor }) => {
                        const tData = data[accessor] ? data[accessor] : "——";
                        return <td key={accessor}>{tData}</td>;
                    })}
                </tr>
            );
        })}
        </tbody>
    );
};

export default TableBody;