export interface ITask {
  id: string;
  completed: boolean;
  text: string;
}

export interface ITaskStore {
  tasks: ITask[];
  isAllTasks: boolean;
  addTask: (text: string) => void;
  hendleComplited: (text: string) => void;
  deleteTask: (task: ITask) => void;
  deleteAll: () => void;
  setTasks: (tasks: ITask[]) => void;
  allTasksTrue: () => void;
  allTasksFalse: () => void;
}
