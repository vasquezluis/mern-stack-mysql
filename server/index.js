import express from "express";
import indexRoutes from "./routes/index.routes.js";
import { PORT } from "./config.js";

const app = express();

app.use(indexRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
