import React from 'react';
import { default as MaterialCheckbox, CheckboxProps as MaterialCheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

export const Checkbox = ({  
    label,
    labelPlacement,
    ...other
}: ICheckboxProps) => {
    const checkbox = <MaterialCheckbox { ...other } />;

    return (
        <React.Fragment>
            { label ? 
                <FormControlLabel 
                    label={label} 
                    labelPlacement={labelPlacement} 
                    control={checkbox} 
                    />
                : checkbox}
        </React.Fragment>
    );
}
