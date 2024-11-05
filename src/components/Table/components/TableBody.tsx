import {LabelType, ValueType} from "../types.ts";
import styles from "../style/style.module.css"


type PropsType = {
    labels: LabelType[];
    values: ValueType[];
};

const TableBody = ({ labels, values }: PropsType) => {
    return (
        <tbody className={styles["table-body"]}>
        {
            values.map((value, index) => {
                return (
                    // TableBody.tsx:11 Warning: Each child in a list should have a unique "key" prop.
                    // Check the render method of `TableBody => index
                    <tr className={styles["table-row"]} key={value.id || index}>
                        {labels.map(label => (
                            <td className={styles["table-cell"]} key={label.value}>
                                {value[label.value]}
                            </td>
                        ))}
                    </tr>
                )
            })
        }
        </tbody>
    );
};

export default TableBody;