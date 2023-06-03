import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(){
    return JSON.parse(localStorage.getItem('tasks')|| '[]')
    
  }
  deleteCompletedTasks(tasks:any){
    let i=0
    while(i<tasks.length){
      if(tasks[i].completed == true)
        tasks.splice(i,1)
    }
  }
  setTasks(tasks: any){
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }
}
