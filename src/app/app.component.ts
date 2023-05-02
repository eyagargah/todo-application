import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';
  src = 'assets/images/bg-desktop-light.jpg';
  light: boolean | undefined;

  body = document.querySelector('body')
  ngOnInit() {}

  newthemeChange(light: any) {
    this.light = light;
    if (this.light) {
      this.src = 'assets/images/bg-desktop-light.jpg';
      if(this.body){
        this.body.style.backgroundColor = "hsl(236, 33%, 92%)"
        this.body.style.transition = "1s ease "


      }
    } else {
      this.src = 'assets/images/bg-desktop-dark.jpg';
      if(this.body){
        this.body.style.backgroundColor = "hsl(235, 21%, 11%)"
        this.body.style.transition = "1s ease "
      }
    }
  }
}
