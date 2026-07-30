import * as React from 'react';

interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /** Show a clear (x) button while there is a value. Defaults to true. */
    clearable?: boolean;
    onClear?: () => void;
    containerClassName?: string;
}
declare const SearchField: React.ForwardRefExoticComponent<SearchFieldProps & React.RefAttributes<HTMLInputElement>>;

export { SearchField, type SearchFieldProps };
