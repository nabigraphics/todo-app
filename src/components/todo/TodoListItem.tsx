import React, { memo } from "react";
import { TodoListItemI } from "./types";

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
  return (
    <li>
      <input type="checkbox" checked={checked} onChange={() => onToggle(id)} />
      {text}
      <button onClick={() => onRemove(id)}>X</button>
    </li>
  );
};

export default memo(TodoListItem);
