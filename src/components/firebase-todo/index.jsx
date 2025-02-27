import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { db } from "firebase/firestore";

const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));

function FirebaseTodo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentEditedTodoID, setCurrentEditedTodoID] = useState(null);

  
  useEffect(() => {
    onSnapshot(q, (snapShot) => {
      setTodos(
        snapShot.docs.map((docItem) => ({
          id: docItem.id,
          todoItem: docItem.data(),
        }))
      );
    });
  }, [inputValue]);

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
      <ul>
        {todos && todos.length > 0 ? (
          todos.map((todoItem) => (
            <Todo
              setInputValue={setInputValue}
              setCurrentEditedTodoID={setCurrentEditedTodoID}
              todoItem={todoItem}
              authInfo={authInfo}
            />
          ))
        ) : (
          <h3>No todos available ! Please add one</h3>
        )}
      </ul>
    </div>
  );
}

export default FirebaseTodo;
