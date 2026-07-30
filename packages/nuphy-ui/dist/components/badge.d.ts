import * as React from 'react';

type Variant = 'neutral' | 'success' | 'outline';
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: Variant;
}
declare function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;

export { Badge, type BadgeProps };
