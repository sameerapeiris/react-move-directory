import React from "react";
import { Form } from "react-bootstrap";
import { FeedbackProps } from "react-bootstrap/esm/Feedback";


interface ThemeFormControlFeedbackProps extends FeedbackProps{
    children: React.ReactNode;
}

const ThemeFormControlFeedback: React.FC<ThemeFormControlFeedbackProps> = ({
    children,
    ...props
}) => {
    return <Form.Control.Feedback className="theme-form-control--feedback"  {...props}>{children}
    </Form.Control.Feedback>;
};

export default ThemeFormControlFeedback;
