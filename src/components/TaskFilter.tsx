// types/index.ts
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => void;
}

function TaskFilter() {
  return (
    <div>
      <h3>Filter Tasks</h3>
      <select>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In-Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}
