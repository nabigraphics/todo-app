import React, { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return <StyledButton ref={ref} {...props} />;
});

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 14px;
  box-sizing: border-box;
  color: white;
  border: 1px solid #096dd9;
  background-color: #096dd9;
  border-radius: 0;
  outline: none;
  &:hover {
    border-color: #1890ff;
    background-color: #1890ff;
  }
  &:active {
    border-color: #0050b3;
    background-color: #0050b3;
  }
`;
