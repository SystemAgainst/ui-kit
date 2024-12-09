import cn from 'classnames';
import { Fragment, useState, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../index';
import styles from './style.module.css';
import { BreadcrumbsPropsType, BreadcrumbType } from './types';

const Breadcrumbs = ({ ...props }: BreadcrumbsPropsType) => {
    const { items = [], maxItems, className, style, separator = '/' } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    const handleOnClick: MouseEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        console.log('You clicked a breadcrumb.');
    };

    const shouldShowAllItems = isExpanded || !maxItems || items.length <= maxItems;

    const visibleBreadcrumbs = shouldShowAllItems
        ? items
        : [items[0], null, items[items.length - 1]];

    const wrapperClass = cn(className, styles.wrapper);

    const getBreadcrumbsLinkClassNames = (index: number) =>
        cn(styles.link, {
            [styles.active]: index === visibleBreadcrumbs.length - 1,
        });

    const renderLink = (item: BreadcrumbType, index: number) => (
        <Link
            className={getBreadcrumbsLinkClassNames(index)}
            to={item.href || '#'}
            aria-current={!item.href ? 'page' : undefined}
        >
            {item.label}
        </Link>
    );

    const renderEllipsis = () => (
        <span
            className={styles.ellipsis}
            onClick={() => setIsExpanded(true)}
            style={{ cursor: 'pointer' }}
        >
            ...
        </span>
    );

    return (
        <>
            <Typography variant="displayLarge">Breadcrumbs</Typography>
            <br />
            <div role="presentation" onClick={handleOnClick}>
                <div className={wrapperClass} style={style}>
                    {visibleBreadcrumbs.map((item, index) => (
                        <Fragment key={`breadcrumbs-${index}`}>
                            {item ? renderLink(item, index) : renderEllipsis()}
                            {index < visibleBreadcrumbs.length - 1 && (
                                <span className={styles.separator}>{separator}</span>
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Breadcrumbs;
