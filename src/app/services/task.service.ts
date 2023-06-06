import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(){
    return JSON.parse(localStorage.getItem('tasks')|| '[]')
    
  }
  getCompletedTasks(tasks:any){
    return tasks.filter((t: { completed: boolean; })=>t.completed == true)
  }

  getActiveTasks(tasks:any){
    return tasks.filter((t: { completed: boolean; })=> t.completed == false)
  }
  
  setTasks(tasks: any){
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }
}
