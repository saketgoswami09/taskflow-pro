export type Priority = "low" | "medium" | "high" | "urgent";
export type TaskStatus = "pending" | "in_progress" | "completed";

export interface Task {
  id: string;
  title: string;
  description?: string;        // ? = optional field
  completed: boolean;
  priority: Priority;
  status: TaskStatus;
  category?: string;
  dueDate?: string;            
  createdAt: string;
  updatedAt: string;
}

// Omit removes fields we don't want the user to provide
export type CreateTaskInput = Omit<Task, "id" | "createdAt" | "updatedAt">;

// Partial makes all fields optional, then we re-add required id
export type UpdateTaskInput = Partial<CreateTaskInput> & { id: string };
