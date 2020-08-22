import React, { FC, SelectHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { ChevronDown } from "react-feather";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select: FC<SelectProps> = ({ children, ...props }) => {
  return (
    <StyledSelectWrapper>
      <StyledSelect {...props}>{children}</StyledSelect>
      <StyledIconWrapper>
        <StyledChevronDown size={20} />
      </StyledIconWrapper>
    </StyledSelectWrapper>
  );
};

export default Select;

const StyledSelectWrapper = styled.div(
  () => css`
    display: inline-flex;
    user-select: none;
    width: auto;
    position: relative;
    border: 1px solid #d9d9d9;
    outline: none;
    border-radius: 0;
    &:hover {
      border-color: #bfbfbf;
    }
    &:focus-within {
      border-color: #1890ff;
    }
  `
);

const StyledSelect = styled.select`
  appearance: none;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 36px 8px 14px;
  width: 100%;
`;

const StyledIconWrapper = styled.div`
  top: 0;
  width: 36px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  pointer-events: none;
`;

const StyledChevronDown = styled(ChevronDown)`
  color: #bfbfbf;
`;
