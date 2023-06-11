export interface Task {
  id: number;
  title: string;
  description: string | null;
  completed: boolean;
}

export interface GetAllTasksResponse {
  getAllTasks: Task[];
}

export interface CreateTaskResponse {
  createTask: Task;
}

export interface CreateTaskForm {
  title: string;
  description: string;
}
