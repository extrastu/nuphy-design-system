import * as React from 'react';

interface CollapseProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
}
declare function Collapse({ title, description, defaultOpen, open: controlledOpen, onOpenChange, children, className, }: CollapseProps): React.JSX.Element;

export { Collapse, type CollapseProps };
