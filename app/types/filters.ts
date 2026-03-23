import type { Priority, TaskStatus } from "./task";

export interface TaskFilters {
  search: string;
  priority: Priority | "all";
  status: TaskStatus | "all";
  showCompleted: boolean;
  sortBy: "createdAt" | "dueDate" | "priority";
  sortOrder: "asc" | "desc";
}

export const DEFAULT_FILTERS: TaskFilters = {
  search: "",
  priority: "all",
  status: "all",
  showCompleted: true,
  sortBy: "createdAt",
  sortOrder: "desc",
};
