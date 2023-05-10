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
  constructor(private data: DataService){}
ngOnInit(){
  this.data.theme.subscribe( light => this.light = light)
  this.getTasks()

}

getTasks = async()=> {
  const response = await axios.get('http://localhost:8000/tasks')

  const success = response.status ===201

  this.tasks = response.data
  console.table(this.tasks)
}

}
