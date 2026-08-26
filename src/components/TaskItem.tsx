// types/index.ts
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {

}

export default TaskItem;
