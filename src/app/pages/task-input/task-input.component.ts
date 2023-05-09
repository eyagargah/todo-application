import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {

  input = document.querySelector('input')
  light : any 
  constructor(private data: DataService){
  }

  ngOnInit(){
    this.data.theme.subscribe( light => {
      console.log("🚀 ~ file: task-input.component.ts:18 ~ TaskInputComponent ~ ngOnInit ~ light:", light)
      return this.light = light
    })
    this.changeTheme()
  }

 addTask(e: any){
  if(e.key == "Enter"){
    console.log(e.target.value)
  }
 }
    
changeTheme(){
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
