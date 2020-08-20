import React, { forwardRef, InputHTMLAttributes } from "react";
import styled from "@emotion/styled";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export default Input;

const StyledInput = styled.input`
  font-size: 16px;
  line-height: 24px;
  padding: 8px 14px;
  border: 1px solid #d9d9d9;
  border-radius: 0;
  &:hover {
    border-color: #bfbfbf;
  }
  &:focus {
    border-color: #1890ff;
  }
`;
