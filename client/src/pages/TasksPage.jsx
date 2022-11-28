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

  return (
    <div>
      <h1>Tasks</h1>
      // recorrer setTasks (variable cond ata)
      {tasks.map((task) => (
        // crear task card desde TaskCard y enviarle como parametro el task que se esta recorriendo
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TasksPage;
