import { Component, EventEmitter, Input, Output } from '@angular/core';
import axios from 'axios';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}
  light: any;
  @Input() tasks: any;
  src = 'assets/images/icon-moon.svg';
  img = document.querySelector('img');
  input = document.querySelector('input');
  taskList = document.querySelector('.task-list') as HTMLDivElement;
  taskInput = document.querySelector('.task-input') as HTMLInputElement;
  @Output() newItemEvent = new EventEmitter<string>();
  themeChange(e: any) {
    if (this.src == 'assets/images/icon-sun.svg') {
      this.light = true;
      this.src = 'assets/images/icon-moon.svg';
      if (this.img) {
        this.img.style.transitionDelay = '2s ease ';
        console.log(this.taskList);
      }
    } else {
      this.src = 'assets/images/icon-sun.svg';
      this.light = false;
      if (this.img) {
        this.img.style.transitionDelay = '2s ease ';
      }
    }
    this.newItemEvent.emit(this.light);
  }

  checkTask(e: any) {
    let task = e.target.parentElement.parentElement.childNodes[1];
   console.log(task)
  }

  deleteTask(e: any) {
    let task = e.target.parentElement.parentElement.childNodes[1].innerHTML;
    let taskIndex = this.tasks.indexOf(
      this.tasks.find((a: { task: any }) => a.task == task)
    );

    this.tasks.splice(taskIndex, 1);
    this.taskService.setTasks(this.tasks);
  }
}
