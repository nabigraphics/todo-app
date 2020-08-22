import React, { useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import GlobalStyle from "./components/common/GlobalStyle";
import TodoTextForm from "./components/todo/TodoTextForm";
import TodoList from "./components/todo/TodoList";
import { TodoListItemI } from "./components/todo/types";
import Select from "./components/common/Select";

enum FilterType {
  All = "all",
  Active = "active",
  Done = "done",
}

const App = () => {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const [list, setList] = useState<TodoListItemI[]>([
    { id: -3, text: "Buy the fresh milk.", checked: false },
    { id: -2, text: "Bake a cake.", checked: false },
    { id: -1, text: "Invite a friends.", checked: false },
  ]);

  const filteredList = useMemo(() => {
    switch (filter) {
      case FilterType.Active:
        return list.filter((item) => !item.checked);

      case FilterType.Done:
        return list.filter((item) => item.checked);
      default:
        return list;
    }
  }, [filter, list]);

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

  const handleFilterChange = useCallback((e) => {
    setFilter(e.target.value as FilterType);
  }, []);

  const filterBox = useMemo(
    () => (
      <StyledFilterContainer>
        <Select onChange={handleFilterChange}>
          <option value={FilterType.All}>All</option>
          <option value={FilterType.Active}>Active</option>
          <option value={FilterType.Done}>Done</option>
        </Select>
      </StyledFilterContainer>
    ),
    [handleFilterChange]
  );

  return (
    <>
      <GlobalStyle />
      <StyledAppContainer>
        <StyledLayoutContainer>
          <StyledTodoContainer>
            <h1>React Todo App</h1>
            <TodoTextForm onAdd={handleAdd} />
            {filterBox}
            <TodoList
              items={filteredList}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
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
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTodoContainer = styled.div`
  max-width: 560px;
  width: 100%;
`;

const StyledFilterContainer = styled.div`
  margin-bottom: 8px;
`;
