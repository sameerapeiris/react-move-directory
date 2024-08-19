import React from "react";
import { Form, FormControlProps } from "react-bootstrap";


interface ThemeFormControlProps extends FormControlProps{
    children?: React.ReactNode;
     placeholder?:string;
     required?:boolean;
     rows?:number;
     isEditMode?: boolean;
}

const ThemeFormControl: React.FC<ThemeFormControlProps> = ({
    children,
    ...props
}) => {
    return <Form.Control className="theme-form-control"  {...props}>{children}</Form.Control>;
};

export default ThemeFormControl;
