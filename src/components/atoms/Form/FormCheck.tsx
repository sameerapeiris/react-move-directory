import React from "react";
import { Form, FormCheckProps } from "react-bootstrap";

interface ThemeFormProps extends FormCheckProps {
    children?: React.ReactNode;
    className?:string;
}

const ThemeFormCheck: React.FC<ThemeFormProps> = ({
    children,
    className,
    ...props
}) => {
    return <Form.Check className={"theme-form " + (className)} {...props}>{children}</Form.Check>;
};

export default ThemeFormCheck;
