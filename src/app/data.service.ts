import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 tasks: any
  constructor() { 
    
  }
  getTasks = async () => {
    const response = await axios.get('http://localhost:8000/tasks');
    this.tasks = response.data;
  };
}
