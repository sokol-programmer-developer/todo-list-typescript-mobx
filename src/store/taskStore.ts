import { ITask, ITaskStore } from '../interfaces';

import { makeAutoObservable } from 'mobx';

class TaskStore implements ITaskStore {
  tasks: ITask[] = [];
  isAllTasks = true;

  constructor() {
    makeAutoObservable(this);
  }

  addTask(text: string) {
    const newTask: ITask = {
      id: new Date().getTime().toString(),
      text,
      completed: false,
    };
    this.tasks.unshift(newTask);
  }

  hendleComplited(id: string) {
    const neededTask = this.tasks.find((el) => el.id === id);
    if (neededTask) {
      const neededIdx = this.tasks.indexOf(neededTask);
      this.tasks[neededIdx].completed = !this.tasks[neededIdx].completed;
    }
  }
  deleteTask(task: ITask) {
    this.tasks = this.tasks.filter((el) => el.id !== task.id);
  }

  deleteAll() {
    this.tasks = [];
  }

  setTasks(tasks: ITask[]) {
    this.tasks = tasks;
  }
  allTasksTrue() {
    this.isAllTasks = true;
  }
  allTasksFalse() {
    this.isAllTasks = false;
  }
}

export default new TaskStore();
