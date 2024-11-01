import { AccordionData } from './types';
import { FC, useState } from "react";
import AccordionItem from "./AccordionItem.tsx";
import "./Accordion.css";


const Accordion: FC<{ items: Array<AccordionData>; }> = ({items}) => {
    const [currentIdx, setCurrentIdx] = useState(-1);

    const handleClick = (index: number) => {
        setCurrentIdx((currentValue) => (currentValue !== index ? index : -1));
    };

    return (
        <ul className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    data={item}
                    isOpen={currentIdx === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </ul>
    );
};

export default Accordion;