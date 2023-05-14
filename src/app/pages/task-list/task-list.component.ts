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
  task: any;

  input = document.querySelector('input');
  completed : any
  formData = {
    completed: false,
  };
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.theme.subscribe((light) => (this.light = light));
    this.getTasks();

  }

  addTask = async (e: any) => {
    if (e.key == 'Enter') {
      try {
        this.task = e.target.value;
        this.completed = false
        const response = await axios.post('http://localhost:8000/', {
          task: this.task,
          completed: this.completed
        });
        const success = response.status === 201;

        if (success) {
          console.log('success');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };


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
