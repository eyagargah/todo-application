import { Component } from '@angular/core';
import axios from 'axios';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  light: any;
  tasks: any

  isChecked = false
  constructor(private data: DataService){}
ngOnInit(){
  this.data.theme.subscribe( light => this.light = light)
  this.getTasks()
  


}

getTasks = async()=> {
  const response = await axios.get('http://localhost:8000/tasks')

  const success = response.status ===201

  this.tasks = response.data
}

checkTask(){
  const checkBtn = document.querySelector('.checkBtn')
  const deleteBtn = document.querySelector('.deleteBtn')
  const tickImg = document.querySelector('.checkedImg')
  var  task = document.querySelector('.taskContent') as HTMLElement
  
  if(!this.isChecked && task){
    this.isChecked = true
    tickImg?.classList.remove('hide')
    tickImg?.classList.add('show')
    checkBtn?.classList.add('checked')
    task.style.textDecoration = "line-through"

  }else
  if(this.isChecked && task){
    this.isChecked = false
    tickImg?.classList.remove('show')
    tickImg?.classList.add('hide')
    checkBtn?.classList.remove('checked')
    task.style.textDecoration = "none"
  }
  
}

deleteTask(){
  console.log("delete")
}

}
