import axios from "axios";

// objeto tarea traida desde el backend
export const createTaskRequest = async (task) =>
  // enviar objeto task
  await axios.post("http://localhost:4000/tasks", task);
