import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  filteredTasks: any
  src = 'assets/images/icon-moon.svg';
  img = document.querySelector('img');
  input = document.querySelector('input');
  taskList = document.querySelector('.task-list') as HTMLDivElement;
  taskInput = document.querySelector('.task-input') as HTMLInputElement;
  @Output() newItemEvent = new EventEmitter<string>();
  ngOnInit(){
    
    this.filteredTasks=this.tasks
  }
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

  deleteCompleted(){
    let completedTasks = this.tasks.filter((t: { completed: boolean; })=> t.completed == true)
    this.filteredTasks=this.tasks
    this.taskService.setTasks(this.tasks)
  }

  filterTask(e:any){
    let filter = e.target.innerHTML
    console.log(filter)
    switch(filter){
      case 'All':
        this.filteredTasks=this.tasks
        console.log(this.tasks.filter((t: { completed: boolean; }) => t.completed == true))
        break
      case 'Completed':
        this.filteredTasks= this.tasks.filter((t: { completed: boolean; }) => t.completed == true)
       
        break
      case 'Active':
        this.filteredTasks = this.tasks.filter((t: { completed: boolean; }) => t.completed == false)
        
        break
    }
    
  }

  checkTask(e: any) {
    let taskContent = e.target.parentElement.childNodes[1].innerHTML;
    let taskContainer = e.target.parentElement.childNodes[1];
    let taskIndex = this.tasks.indexOf(
      this.tasks.find((t: { task: any }) => t.task == taskContent)
    );
    let checkImg = e.target.childNodes[0];
    let checkBtn= e.target
    if (this.tasks[taskIndex].completed == false) {
      this.tasks[taskIndex].completed = true;
      taskContainer.classList.add('strike');
      checkImg.classList.remove('hide')
      checkBtn.classList.add('isChecked')
    } else {
      this.tasks[taskIndex].completed = false;
      taskContainer.classList.remove('strike');
      checkImg.classList.add('hide')
      checkBtn.classList.remove('isChecked')
    }
    console.log(this.tasks);
    this.taskService.setTasks(this.tasks);
  }

  deleteTask(e: any) {
    let task = e.target.parentElement.parentElement.childNodes[1].innerHTML;
    let taskIndex = this.tasks.indexOf(
      this.tasks.find((a: { task: any }) => a.task == task)
    );

    this.tasks.splice(taskIndex, 1);
    this.filteredTasks = this.tasks
    this.taskService.setTasks(this.tasks);
  }
}
