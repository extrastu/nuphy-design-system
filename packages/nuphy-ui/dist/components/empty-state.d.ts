import * as React from 'react';

interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Icon or illustration shown in the circular badge. */
    icon?: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
    /** Optional call-to-action(s) rendered below the description. */
    action?: React.ReactNode;
}
declare function EmptyState({ className, icon, title, description, action, ...props }: EmptyStateProps): React.JSX.Element;

export { EmptyState, type EmptyStateProps };
