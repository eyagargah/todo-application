import { Component } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
})
export class TaskInputComponent {
  tasks: any = [];
  task: Task = new Task();
  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
  addTask(e: any) {
    if (e.key == 'Enter') {
      this.task.task = e.target.value;
      this.task.completed = false;
      this.tasks.unshift(this.task);
      this.taskService.setTasks(this.tasks)
      this.task = new Task();
      e.target.value = '';
    }
  }
}
