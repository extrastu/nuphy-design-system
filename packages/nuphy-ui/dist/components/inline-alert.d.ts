import * as React from 'react';

type InlineAlertVariant = 'info' | 'success' | 'warning' | 'error';
interface InlineAlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    variant?: InlineAlertVariant;
    title?: React.ReactNode;
    /** Show a dismiss button. Fires onDismiss when clicked. */
    dismissible?: boolean;
    onDismiss?: () => void;
    /** Override the default variant icon. Pass null to hide it. */
    icon?: React.ReactNode;
}
declare function InlineAlert({ className, variant, title, dismissible, onDismiss, icon, children, ...props }: InlineAlertProps): React.JSX.Element;

export { InlineAlert, type InlineAlertProps, type InlineAlertVariant };
