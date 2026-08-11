import * as React from 'react';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** 分隔线方向，默认横向 */
    orientation?: 'horizontal' | 'vertical';
}
/** 横向 / 纵向 hairline 分隔线 */
declare function Divider({ className, orientation, ...props }: DividerProps): React.JSX.Element;

export { Divider, type DividerProps };
