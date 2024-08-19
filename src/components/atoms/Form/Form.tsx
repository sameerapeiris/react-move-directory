import React from "react";
import { Form, FormProps } from "react-bootstrap";

interface CatFormProps extends FormProps {
    children?: React.ReactNode;
    className?: string;
}

const ThemeForm: React.FC<CatFormProps> = ({
    children,
    className,
    ...props
}) => {
    return <Form className={"theme-form " +  className} {...props}>{children}</Form>;
};

export default ThemeForm;
