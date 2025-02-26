import { Button, TextField } from "@mui/material";
import { useState } from "react";
import {} from "firebase/firestore";

function FirebaseTodo() {
  const [inputValue, setInputValue] = useState("");

  function handleAddTodo(event) {
    event.preventDefault();
    
      : addDoc(collection(db, "todos"), {
          todo: inputValue,
          timestamp: serverTimestamp(),
        });

    setInputValue("");
    
  }

  return (
    <div className="firebase-todo-wrappper">
      <h1>Firebase Todo Application</h1>
      <form>
        <TextField
          id="todo"
          label="Create Todo"
          variant="outlined"
          size="small"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          {currentEditedTodoID !== null ? "Edit Todo" : "Add Todo"}
        </Button>
      </form>
    </div>
  );
}

export default FirebaseTodo;
