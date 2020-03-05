import React from "react";
import "./Button.css";

interface Props {
  shape?: string;
  type?: string;
  children: React.ReactNode;
  onClick?: () => any;
}

function Button({ children, shape, type, onClick }: Props) {
  let className = "button";
  if (shape === "circle") className += " button-circle";
  if (type === "secondary") className += " button-secondary";

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
