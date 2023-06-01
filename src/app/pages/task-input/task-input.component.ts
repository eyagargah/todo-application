import { Component } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {
  tasks: any
  task: Task= {
    task:'',
    completed:false
  }
  constructor(private taskService:TaskService){}
  ngOnInit(){
    this.tasks= this.taskService.getTasks()
  }
  addTask(e:any){
    if(e.key =='Enter'){
      this.task.task= e.target.value

      this.tasks.unshift(this.task)
      console.log(this.tasks)
      this.taskService.setTasks(this.tasks)
      e.target.value=''
    }
  }
}
