import { Button, List, ListItem, ListItemText } from "@mui/material";

function Todo({ todoItem }) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={todoItem?.todoItem?.todo} />
      </ListItem>
      <Button
        onClick={() => handleDelete(todoItem.id)}
        variant="contained"
        color="secondary"
      >
        Delete
      </Button>
    </List>
  );
}

export default Todo;
