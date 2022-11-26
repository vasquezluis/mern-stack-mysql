import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

import { PORT } from "./config.js";

const app = express();
app.use(morgan('dev'))
app.use(express.json())

app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
