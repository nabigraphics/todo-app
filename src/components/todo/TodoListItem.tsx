import React, { memo, useMemo } from "react";
import { TodoListItemI } from "./types";
import { X } from "react-feather";
import styled from "@emotion/styled";

type TodoListItemProps = TodoListItemI & {
  onToggle(id: number): void;
  onRemove(id: number): void;
};

const TodoListItem = ({
  id,
  text,
  checked,
  onToggle,
  onRemove,
}: TodoListItemProps) => {
  const memoizedText = useMemo(
    () => <StyledText checked={checked}>{text}</StyledText>,
    [text, checked]
  );
  const memoizedCloseButton = useMemo(
    () => (
      <StyledButton onClick={() => onRemove(id)}>
        <X />
      </StyledButton>
    ),
    [onRemove, id]
  );
  return (
    <StyledBlock>
      <input type="checkbox" checked={checked} onChange={() => onToggle(id)} />
      {memoizedText}
      {memoizedCloseButton}
    </StyledBlock>
  );
};

export default memo(TodoListItem);

const StyledBlock = styled.li`
  padding: 16px;
  box-sizing: border-box;
  background-color: #fafafa;
  display: inline-flex;
  align-items: center;
  width: 100%;
`;

const StyledText = styled.span<Pick<TodoListItemProps, "checked">>`
  flex: 1 1 0;
  white-space: nowrap;
  font-size: 16px;
  line-height: 24px;
  margin-left: 12px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) =>
    props.checked ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.85)"};
`;

const StyledButton = styled.button`
  padding: 4px;
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #f0f0f0;
  }
`;
