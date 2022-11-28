import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";

import TaskCard from "./components/TaskCard";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // funcion que ejecuta la funcion get desde api
    async function loadTasks() {
      const response = await getTasksRequest();
      setTasks(response.data);
    }
    loadTasks();
  }, []);

  // crear task card desde TaskCard y enviarle como parametro el task que se esta recorriendo
  function renderMain() {
    if(tasks.length === 0) return <h1>Not tasks yet</h1>
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1>Tasks</h1>
      {/* recorrer setTasks (variable con data) */}
      {renderMain()}
    </div>
  );
}

export default TasksPage;
