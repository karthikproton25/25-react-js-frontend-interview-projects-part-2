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

  function onDragStart(event, id){
    event.dataTransfer.setData('id',id)
  }

  function renderTodos() {
    const todoListToRender = {
      wip: [],
      completed: [],
    };

    todos.forEach(todoItem => {
      todoListToRender[todoItem.status]
  
    });


  return (
    <div className="drag-and-drop-container">
      <h1>Drag and Drop</h1>
      <div className="drag-and-drop-board">
        <div
          onDrop={(event) => onDrop(event, "wip")}
          onDragOver={(event) => event.preventDefault()}
          className="work-in-progress"
        >
          <h3>In Progress</h3>
          <div className="todo-list-wrapper">
          {renderTodos().wip}
          </div>
        </div>
        <div
          onDrop={(event) => onDrop(event, "completed")}
          onDragOver={(event) => event.preventDefault()}
          className="completed"
        >
          <h3>Completed</h3>
          <div className="todo-list-wrapper">
          {renderTodos().completed}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragAndDropFeature;
