import axios from "axios";

// traer tarea del servidor
export const getTasksRequest = async () =>
// obtener datos
  await axios.get("http://localhost:4000/tasks");

// objeto tarea traida desde el backend
export const createTaskRequest = async (task) =>
  // enviar objeto task
  await axios.post("http://localhost:4000/tasks", task);
