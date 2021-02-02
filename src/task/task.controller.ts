import { Controller, Delete, Get, Param, Patch, Query } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Patch(':id')
  updateTask(@Param('id') id) {
    return this.taskService.updateTask(id);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string, @Query('force') force: boolean) {
    console.log(force);

    console.log(!force);
    if (!force) {
      return this.taskService.deleteTask(id);
    } else {
      return this.taskService.forceDeleteTask(id);
    }
  }
}
