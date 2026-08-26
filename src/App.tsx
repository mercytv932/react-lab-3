import { useState } from "react";

import { tasks } from "./data/Data";
import TaskList, { type TaskStatus } from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState(tasks);

  function handleDeleteBtn(taskId: string) {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);

    setTaskList(updatedTasks);
  }

  function handleStatusChange(taskId: string, newStatus: TaskStatus) {
    const tasksAfterStatusChange = taskList.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task,
    );

    setTaskList(tasksAfterStatusChange);
  }

  return (
    <TaskList
      tasks={taskList}
      onDelete={handleDeleteBtn}
      onStatusChange={handleStatusChange}
    />
  );
}

export default App;
