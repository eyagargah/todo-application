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
  formData = {
    completed: false,
  };
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
    let checkImg = e.target.childNodes[0];
    let taskContent = e.target.parentElement.childNodes[1];
   
   if(checkBtn.classList.contains('isChecked')){
    checkBtn.classList.remove('isChecked');
    checkImg.classList.add('hide')
    console.log(checkBtn)

    //checkImg.src = ""
    
   
   }else{
    checkBtn.classList.add('isChecked');
    console.log(checkBtn)
    checkImg.classList.remove('hide')

    //checkImg.src = "../../../assets/images/icon-check.svg"
   }
   
  }

  deleteTask(e: any) {
    let el = (e.target as HTMLElement).parentElement?.parentElement;
    console.log(el);
  }
}
