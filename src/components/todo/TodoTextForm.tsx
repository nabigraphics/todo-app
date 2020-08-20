import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  memo,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";

type TodoTextFormProps = {
  onAdd(text: string): void;
};

const TodoTextForm = ({ onAdd }: TodoTextFormProps) => {
  const [text, setText] = useState("");

  const handleAdd = useCallback(
    (text) => {
      if (typeof onAdd === "function") {
        onAdd(text);
        setText("");
      }
    },
    [onAdd]
  );

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setText(e.currentTarget.value);
    },
    []
  );

  const handleKeyPress = useCallback<KeyboardEventHandler>(
    (e) => {
      if (e.key === "Enter") {
        handleAdd(text);
      }
    },
    [handleAdd, text]
  );

  const handleClick = useCallback<MouseEventHandler>(() => {
    handleAdd(text);
  }, [handleAdd, text]);

  return (
    <div>
      <input value={text} onKeyPress={handleKeyPress} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default memo(TodoTextForm);
