import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/tasksform" element={<TasksForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
