import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {

  input = document.querySelector('input')
  @Input() light : any
  OnInit(){
    if(this.light){
      if(this.input){
        this.input.style.backgroundColor = 'white';
      }
    }
    else {
      if(this.input){
        this.input.style.backgroundColor = 'hsl(235, 24%, 19%)';
      }
    }
  }


}
