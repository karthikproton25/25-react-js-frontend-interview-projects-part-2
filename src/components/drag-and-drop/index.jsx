import { useEffect, useState } from "react";

function DragAndDropFeature() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

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
