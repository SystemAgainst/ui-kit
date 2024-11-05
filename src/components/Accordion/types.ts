import { ReactNode } from 'react';

export type AccordionData = {
    title?: string;
    subtitle?: string;
    content?: ReactNode;
    expandIcon?: string;
    defaultExpanded?: boolean;
    expanded?: boolean; // true - icon on right, false - icon on left
    disabled?: boolean;
    square?: boolean;
    disableGutters?: boolean;
};