import { Component} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  src = 'assets/images/icon-moon.svg';
  img = document.querySelector('img');
  tasks:any
  constructor( private taskService:TaskService) {}

 
  ngOnInit(){
    this.tasks= this.taskService.getTasks()
  }
 
  themeChange(e: any) {
    if (this.src == 'assets/images/icon-sun.svg') {
      this.src = 'assets/images/icon-moon.svg';
      if (this.img) {
        this.img.style.transitionDelay = '2s ease ';
      }
    } else {
      this.src = 'assets/images/icon-sun.svg';
      
      if (this.img) {
        this.img.style.transitionDelay = '2s ease ';
      }
    }
  }

}
