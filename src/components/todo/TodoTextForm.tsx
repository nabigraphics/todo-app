import React, {
  KeyboardEventHandler,
  memo,
  MouseEventHandler,
  useCallback,
  useRef,
} from "react";
import Input from "../common/Input";
import styled from "@emotion/styled";
import Button from "../common/Button";

type TodoTextFormProps = {
  onAdd(text: string): void;
};

const TodoTextForm = ({ onAdd }: TodoTextFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = useCallback(() => {
    if (typeof onAdd === "function") {
      if (inputRef.current) {
        onAdd(inputRef.current.value);
        inputRef.current.value = "";
      }
    }
  }, [onAdd]);

  const handleKeyPress = useCallback<KeyboardEventHandler>(
    (e) => {
      if (e.key === "Enter") {
        handleAdd();
      }
    },
    [handleAdd]
  );

  const handleClick = useCallback<MouseEventHandler>(() => {
    handleAdd();
  }, [handleAdd]);

  return (
    <StyledBlock>
      <TodoTextInput
        ref={inputRef}
        onKeyPress={handleKeyPress}
        placeholder={"Input a task here."}
      />
      <Button onClick={handleClick}>Add</Button>
    </StyledBlock>
  );
};

export default memo(TodoTextForm);

const StyledBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const TodoTextInput = styled(Input)`
  flex: 1 1 0;
  margin-right: 8px;
`;
