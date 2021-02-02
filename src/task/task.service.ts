import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  tasks: Array<any> = ['To clean bathroom ', 'Watch AOT', 'Read Manga'];

  getAllTasks(): Array<any> {
    return this.tasks;
  }

  getTaskById() {
    return {
      lol: 'lol',
    };
  }

  updateTask(id: string) {
    return `Updated Task "${id}"`;
  }

  deleteTask(id: string) {
    return `deleted task "${id}"`;
  }

  forceDeleteTask(id: string) {
    return `forceDeleted task "${id}"`;
  }
}
