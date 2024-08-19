import React from "react";
import {Form , FormGroupProps } from 'react-bootstrap';


interface ThemeFormGroupProps extends FormGroupProps {
    children?: React.ReactNode;
}

const ThemeFormGroup: React.FC<ThemeFormGroupProps> = ({
    children,
    ...props
}) => {
return(
    <Form.Group className="theme-form-group" {...props}>{children}</Form.Group>
)
};

export default ThemeFormGroup;
