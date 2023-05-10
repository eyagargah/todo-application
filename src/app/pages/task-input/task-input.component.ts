import { Component, Input } from '@angular/core';
import axios from 'axios';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
})
export class TaskInputComponent {
  input = document.querySelector('input');
  light: any;
  task: any;
  completed : any
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.theme.subscribe((light) => {
      return (this.light = light);
    });
    this.changeTheme();
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

  changeTheme() {
    if (this.light) {
      if (this.input) {
        this.input.style.backgroundColor = 'white';
      }
    } else {
      if (this.input) {
        this.input.style.backgroundColor = 'hsl(235, 24%, 19%)';
      }
    }
  }
}
