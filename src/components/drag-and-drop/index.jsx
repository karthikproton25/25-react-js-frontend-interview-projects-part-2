import { useEffect, useState } from "react";

function DragAndDropFeature() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch(
        "https://dummyjson.com/todos?limit=5&skip=0"
      );
      const result = await apiResponse.json();

      if (result && result.todos && result.todos.length > 0) {
        setLoading(false);
        const updatedTodos = result.todos.map((todoItem) => ({
          ...todoItem,
          status: "wip",
        }));
        setTodos(updatedTodos);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  console.log(todos);

  return (
    <div className="drag-and-drop-container">
      <h1></h1>
    </div>
  );
}

export default DragAndDropFeature;
