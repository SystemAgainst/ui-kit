import { AccordionData } from './types';
import {FC, useEffect, useRef, useState} from "react";


interface AccordionItemProps {
    data?: AccordionData;
    isOpen?: boolean;
    onClick?: () => void;
}

const AccordionItem :FC<AccordionItemProps> = ({
  data,
  isOpen,
  onClick,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const [height, setHeight] = useState<number>(0);

    const [isExpanded, setIsExpanded] = useState<boolean>(data?.defaultExpanded || false);

    useEffect(() => {
        if (!isExpanded) {
            setHeight(0);
        } else {
            const contentEl = contentRef.current as HTMLDivElement;

            setHeight(contentEl.scrollHeight);
        }
    }, [isExpanded]);

    const handleClick = () => {
        setIsExpanded((prev) => !prev);
        if (onClick) onClick();
    };

    return (
        <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <h2 className="accordion-item-title">
                <button
                    className="accordion-item-btn"
                    onClick={handleClick}
                    style={{ justifyContent: data?.expanded ? 'space-between' : 'flex-start' }}
                >
                    {!data?.expanded && data?.expandIcon && (
                        <img src={data.expandIcon} alt="expand icon" className="accordion-icon" />
                    )}
                    {data?.title}
                    {data?.expanded && data?.expandIcon && (
                        <img src={data.expandIcon} alt="expand icon" className="accordion-icon" />
                    )}
                </button>
            </h2>
            <div className="accordion-item-container" style={{ height }}>
                <div
                    ref={contentRef}
                    className="accordion-item-content"
                >
                    {data?.content}
                </div>
            </div>
        </li>
    );
}

export default AccordionItem;