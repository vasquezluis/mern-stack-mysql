import { useContext, useState } from "react";
import {
  getTasksRequest,
  createTaskRequest,
  deleteTaskRequest,
} from "../api/tasks.api";

import { TaskContext } from "./TaskContext";

// hook personalizado para tener acceso al usecontext
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be within a TaskContextProvider");
  }
  return context;
};

// el que agrupa

// retornar un componente de React
export const TaskContextProvider = ({ children }) => {
  // arreglo de tareas para taskspage
  const [tasks, setTasks] = useState([]);

  // funcion que ejecuta la funcion get desde api
  // llenar tasks con las tareas
  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  // eliminar tarea
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      // setTasks([...tasks, response.data])
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    // value - cualquier dato al que los hijos puedan acceder
    <TaskContext.Provider value={{ tasks, loadTasks, createTask, deleteTask }}>
      {/* Cualquier otro componente que quiera obtener datos del contexto */}
      {children}
    </TaskContext.Provider>
  );
};
