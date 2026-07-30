import * as React from 'react';

interface NavItemData {
    id: string;
    label: string;
    icon?: React.ReactNode;
}
interface SettingsNavProps {
    items: NavItemData[];
    value: string;
    onValueChange: (id: string) => void;
    className?: string;
    'aria-label'?: string;
}
declare function SettingsNav({ items, value, onValueChange, className, 'aria-label': ariaLabel, }: SettingsNavProps): React.JSX.Element;
interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    icon?: React.ReactNode;
}
declare const NavItem: React.ForwardRefExoticComponent<NavItemProps & React.RefAttributes<HTMLButtonElement>>;

export { NavItem, type NavItemData, type NavItemProps, SettingsNav, type SettingsNavProps };
