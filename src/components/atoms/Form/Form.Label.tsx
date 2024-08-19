import React from "react";
import { Form } from "react-bootstrap";

interface ThemeFormLabelProps extends React.HTMLAttributes<HTMLElement>{
    children?: React.ReactNode;
    className?: string;
    htmlFor?: string;
}

const ThemeFormLabel: React.FC<ThemeFormLabelProps> = ({
    htmlFor,
    className,
    children,
    ...props
}) => {
    return <Form.Label className={"theme-form-label " +  (className ? className : " ")} htmlFor={htmlFor} {...props}>{children}</Form.Label>;
};

export default ThemeFormLabel;
