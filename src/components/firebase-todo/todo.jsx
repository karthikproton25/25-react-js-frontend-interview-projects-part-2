import { List } from "@mui/material";

function Todo({ todoItem }) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={todoItem?.todoItem?.todo} />
      </ListItem>
    </List>
  );
}

export default Todo;
