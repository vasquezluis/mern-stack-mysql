import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  // obtener el resultado de select por fecha de creacion ascendente
  const [result] = await pool.query(
    "SELECT * FROM tasks ORDER BY createdAt ASC"
  );

  res.json(result);
};

export const getTask = async (req, res) => {
  const {
    params: { id },
  } = req;

  // getting single tasks
  const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);

  if (result.length === 0) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.send(result[0]);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  // resultado de la query insert, devuelve un array result
  const [result] = await pool.query(
    "INSERT INTO tasks(title, description) VALUES (?, ?)",
    [title, description]
  );
  res.json({
    id: result.insertId,
    title,
    description,
  });
};

export const updateTask = (req, res) => {
  res.send("Updating tasks");
};

export const deleteTask = async (req, res) => {
  const {
    params: { id },
  } = req;

  const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.sendStatus(204);
};
