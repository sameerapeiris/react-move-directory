import React from "react";
import { Button, ButtonProps } from "react-bootstrap";

interface MoveButtonProps extends ButtonProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  variant?: string;
  outline?: boolean;
}

const MoveButton: React.FC<MoveButtonProps> = ({
  children,
  variant = "primary",
  outline,
  ...props
}) => {
  return (
    <Button variant={outline ? `outline-` + variant : variant} {...props}>
      {children}
    </Button>
  );
};

export default MoveButton;
export type { MoveButtonProps };
