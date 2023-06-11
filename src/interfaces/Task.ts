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

export interface UpdateTaskResponse {
  updateTask: Task;
}

export interface UpsertTaskForm {
  title: string;
  description: string;
}

export interface CreateTaskPayload {
  title: string;
  description: string;
}

export interface UpdateTaskPayload {
  id: number;
  title: string;
  description: string;
}
