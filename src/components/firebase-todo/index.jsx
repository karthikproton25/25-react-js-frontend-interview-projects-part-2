import { Button, TextField } from "@mui/material";

function FirebaseTodo() {
  const [inputValue, setInputValue] = useState("");

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
      </form>
    </div>
  );
}

export default FirebaseTodo;
