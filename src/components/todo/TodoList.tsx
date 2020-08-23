import React from "react";
import TodoListItem, { TodoListItemProps } from "./TodoListItem";
import styled from "@emotion/styled";
import { useTransition, animated } from "react-spring";

type TodoListProps = {
  items: any[];
} & Pick<TodoListItemProps, "onToggle" | "onRemove">;

const TodoList = ({ items, onToggle, onRemove }: TodoListProps) => {
  const transitions = useTransition(items, (item) => item.id, {
    from: { height: "0px", opacity: 0 },
    enter: { height: "64px", opacity: 1 },
    leave: { height: "0px", opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
  });
  return (
    <StyledBlock>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={{ ...props }}>
          <TodoListItem
            key={item.id}
            id={item.id}
            text={item.text}
            checked={item.checked}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        </animated.div>
      ))}
    </StyledBlock>
  );
};

export default TodoList;

const StyledBlock = styled.div`
  margin: 0;
  padding: 0;
  & > div {
    overflow: hidden;
    border-bottom: 1px solid #d9d9d9;
  }
`;
