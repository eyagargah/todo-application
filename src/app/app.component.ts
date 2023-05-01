import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  src=''

  light : boolean = false
  
  ngOnInit(){
    if(this.light){
      this.src= "assets/images/bg-desktop-light.jpg"
      console.log("🚀 ~ file: app.component.ts:17 ~ AppComponent ~ ngOnInit ~ src:", this.src)
    }
    else {
      this.src= "assets/images/bg-desktop-dark.jpg"
    }
  }
}
