import React from 'react';

export type NavItemProps = {
    link: string;
    title: string;
    outsideLink?: boolean;
    type: string | 'top' | 'bottom';
};

export const NavItem = ({ link, title, type, outsideLink }: NavItemProps) => {
    const style =
        type == 'top'
            ? 'nav-link'
            : 'lg:inline-flex lg:w-auto w-full  py-2 rounded text-gray-700 dark:text-gray-200 dark:hover:text-gray-50  hover:text-gray-500 font-medium items-center justify-center';
    return (
        <a
            href={link}
            rel='noopener noreferrer'
            target={outsideLink === true ? '_blank' : null}
            className={style}
            key={`${title}-top-nav-link`}
        >
            {title}
        </a>
    );
};
