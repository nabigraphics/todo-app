import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import GlobalStyle from "./components/common/GlobalStyle";
import TodoTextForm from "./components/todo/TodoTextForm";
import TodoList from "./components/todo/TodoList";
import TodoListItem from "./components/todo/TodoListItem";
import { TodoListItemI } from "./components/todo/types";

const App = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<TodoListItemI[]>([]);

  const handleAdd = useCallback(
    (text) => {
      if (text.trim() === "") return;
      setList(list.concat({ id: count, text, checked: false }));
      setCount(count + 1);
    },
    [list, count]
  );

  const handleToggle = useCallback(
    (id) => {
      const index = list.findIndex((item) => item.id === id);
      const newList = [...list];
      if (index > -1) {
        const selected = list[index];
        newList[index] = {
          ...selected,
          checked: !selected.checked,
        };
      }
      setList(newList);
    },
    [list]
  );

  const handleRemove = useCallback(
    (id) => {
      setList(list.filter((item) => item.id !== id));
    },
    [list]
  );

  return (
    <>
      <GlobalStyle />
      <StyledAppContainer>
        <h1>React Todo App</h1>
        <TodoTextForm onAdd={handleAdd} />
        <TodoList>
          {list.map((item) => (
            <TodoListItem
              key={item.id}
              id={item.id}
              text={item.text}
              checked={item.checked}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
        </TodoList>
      </StyledAppContainer>
    </>
  );
};

export default App;

const StyledAppContainer = styled.div`
  font-weight: bold;
`;
