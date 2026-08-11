import * as React from 'react';

interface SliderProps {
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    /** 无障碍标签，映射到 aria-label */
    label?: string;
    id?: string;
    className?: string;
    /** 是否在右侧显示当前数值 */
    showValue?: boolean;
    /** 数值后缀单位，如 '%' */
    unit?: string;
}
/** Apple / macOS 设置风格滑块：细轨道 + 圆形拇指 */
declare function Slider({ value, defaultValue, onValueChange, min, max, step, disabled, label, id, className, showValue, unit, }: SliderProps): React.JSX.Element;

export { Slider, type SliderProps };
