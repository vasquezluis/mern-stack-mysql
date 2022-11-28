import { useTasks } from "../context/TaskProvider";

function TaskCard({ task }) {
  // acceder al contexto para actualizar la lista de tareas
  const { deleteTask } = useTasks();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✔️" : "❌"}</span>
      <span>{task.createdAt}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskCard;
