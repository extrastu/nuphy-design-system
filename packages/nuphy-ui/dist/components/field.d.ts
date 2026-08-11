import * as React from 'react';

interface FieldProps {
    children: React.ReactNode;
    label?: string;
    htmlFor?: string;
    hint?: string;
    error?: string;
    className?: string;
    /** 必填星号展示 */
    required?: boolean;
}
/** 表单字段包装：label + 控件 + hint/error */
declare function Field({ children, label, htmlFor, hint, error, className, required, }: FieldProps): React.JSX.Element;

export { Field, type FieldProps };
