/// <reference types="react" />
import { CheckboxProps as MaterialCheckboxProps } from '@material-ui/core/Checkbox';
export interface ICheckboxProps extends Partial<MaterialCheckboxProps> {
    checked?: boolean;
    value?: string;
    label?: string;
    labelPlacement?: 'start' | 'end' | 'bottom' | 'top';
    color?: 'default' | 'primary' | 'secondary';
    disabled?: boolean;
    size?: 'small' | 'medium';
    onChange?: (event: object) => void;
}
export declare const Checkbox: ({ label, labelPlacement, ...other }: ICheckboxProps) => JSX.Element;
