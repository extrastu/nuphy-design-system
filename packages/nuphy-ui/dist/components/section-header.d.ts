import * as React from 'react';

interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React.ReactNode;
    description?: React.ReactNode;
    /** Optional eyebrow/overline label shown above the title. */
    eyebrow?: React.ReactNode;
    /** Right-aligned actions (buttons, links, etc.). */
    actions?: React.ReactNode;
    /** Heading element to render for the title. Defaults to h2. */
    as?: 'h1' | 'h2' | 'h3' | 'h4';
}
declare function SectionHeader({ className, title, description, eyebrow, actions, as: Heading, ...props }: SectionHeaderProps): React.JSX.Element;

export { SectionHeader, type SectionHeaderProps };
