import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  light: any;
  constructor(private data: DataService){}
ngOnInit(){
  this.data.theme.subscribe( light => this.light = light)
}
}
