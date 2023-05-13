import { Component } from '@angular/core';
import axios from 'axios';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  light: any;
  tasks: any;

  isChecked = false;
  constructor(private data: DataService) {}
  ngOnInit() {
    this.data.theme.subscribe((light) => (this.light = light));
    this.getTasks();
  }

  getTasks = async () => {
    const response = await axios.get('http://localhost:8000/tasks');

    this.tasks = response.data;
  };

  checkTask(e: any) {
    let checkBtn = e.target.parentElement;
    let checkImg = e.target;
    
    let taskContent = e.target.parentElement.parentElement.childNodes[1]
    let text = e.target.parentElement.parentElement.childNodes[1].innerHTML
    console.log(taskContent)
    if (!this.isChecked) {
      this.isChecked = true;
      checkBtn?.classList.add('isChecked');
      checkImg?.classList.remove('hide');
      taskContent.classList.add('strike')
 
    } else if(this.isChecked){
      this.isChecked = false;
      checkBtn?.classList.remove('isChecked');
      checkImg?.classList.add('hide');
      taskContent.classList.remove('strike')
      
      
      
    }
  }

  deleteTask(e: any) {
    let el = (e.target as HTMLElement).parentElement?.parentElement;
    console.log(el);
  }
}
