import { useState } from "react";

import { tasks } from "./data/Data";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState(tasks);

  function handleDelete(taskId: string) {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);

    setTaskList(updatedTasks);
  }
}

export default App;
