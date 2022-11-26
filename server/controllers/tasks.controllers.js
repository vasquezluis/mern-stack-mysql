import { pool } from "../db.js";

export const getTasks = (req, res) => {
  res.send("Getting tasks");
};

export const getTask = (req, res) => {
  res.send("Getting task");
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

export const deleteTask = (req, res) => {
  res.send("Deleting tasks");
};
