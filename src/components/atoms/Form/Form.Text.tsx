import React from "react";
import { Form, FormTextProps } from "react-bootstrap";

interface ThemeFormTextProps extends FormTextProps{
    children?: React.ReactNode;
}

const ThemeFormText: React.FC<ThemeFormTextProps> = ({
    children,
    ...props
}) => {
    return <Form.Text className="theme-form-text" {...props}>{children}</Form.Text >;
};

export default ThemeFormText;
