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
  padding: 8px 14px;
  border: 1px solid #d9d9d9;
  border-radius: 0;
  &:focus {
    border: 1px solid #1890ff;
  }
`;
