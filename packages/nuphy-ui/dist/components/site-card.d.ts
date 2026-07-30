import * as React from 'react';

interface SiteCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'title'> {
    /** Favicon URL or a custom node (icon element). */
    favicon?: React.ReactNode | string;
    title: string;
    /** Secondary line, typically the host (e.g. "nuphy.com"). */
    subtitle?: string;
    pinned?: boolean;
    onClick?: () => void;
    /** Trailing actions (IconButtons for pin/remove, etc.). */
    actions?: React.ReactNode;
}
declare function SiteCard({ favicon, title, subtitle, pinned, onClick, actions, className, ...props }: SiteCardProps): React.JSX.Element;

export { SiteCard, type SiteCardProps };
