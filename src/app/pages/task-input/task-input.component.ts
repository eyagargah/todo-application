import { Component, Input } from '@angular/core';
import axios from 'axios';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {

  input = document.querySelector('input')
  light : any 
  task : any
  constructor(private data: DataService){
  }

  ngOnInit(){
    this.data.theme.subscribe( light => {
      console.log("🚀 ~ file: task-input.component.ts:18 ~ TaskInputComponent ~ ngOnInit ~ light:", light)
      return this.light = light
    })
    this.changeTheme()
  }

 addTask = async(e: any)=>  {
  if(e.key == "Enter"){
    const response = await axios.get('http://localhost:8000/new', { task : e.target.value})
    
    console.log(e.target.value)
    const success = response.status === 201;
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
