import { useState } from "react";
import { tasks } from "../data/Data";
import TaskItem from "./TaskItem";

// types/index.ts
export type TaskStatus = "pending" | "in-progress" | "completed";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
 
}

export default TaskList;
