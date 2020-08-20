import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import GlobalStyle from "./components/common/GlobalStyle";
import TodoTextForm from "./components/todo/TodoTextForm";
import TodoList from "./components/todo/TodoList";
import TodoListItem from "./components/todo/TodoListItem";
import { TodoListItemI } from "./components/todo/types";

const App = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<TodoListItemI[]>([
    { id: -3, text: "hi1", checked: false },
    { id: -2, text: "hi2", checked: false },
    { id: -1, text: "hi3", checked: false },
  ]);

  const handleAdd = useCallback(
    (text) => {
      if (text.trim() === "") return;
      setList((list) => list.concat({ id: count, text, checked: false }));
      setCount((count) => count + 1);
    },
    [count]
  );

  const handleToggle = useCallback((id) => {
    setList((list) => {
      const index = list.findIndex((item) => item.id === id);
      const newList = [...list];
      if (index > -1) {
        const selected = list[index];
        newList[index] = {
          ...selected,
          checked: !selected.checked,
        };
      }
      return newList;
    });
  }, []);

  const handleRemove = useCallback((id) => {
    setList((list) => list.filter((item) => item.id !== id));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledAppContainer>
        <StyledLayoutContainer>
          <StyledTodoContainer>
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
          </StyledTodoContainer>
        </StyledLayoutContainer>
      </StyledAppContainer>
    </>
  );
};

export default App;

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  min-height: 100vh;
`;

const StyledLayoutContainer = styled.div`
  padding: 16px;
  box-sizing: border-box;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTodoContainer = styled.div`
  max-width: 560px;
  width: 100%;
`;
