import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';
  srcDesktop = 'assets/images/bg-desktop-light.jpg';
  srcMobile = 'assets/images/bg-mobile-light.jpg';
  light: boolean | undefined;

  body = document.querySelector('body')

  newthemeChange(light: any) {
    this.light = light;
    console.log(light)
    if (this.light) {
      this.srcDesktop = 'assets/images/bg-desktop-light.jpg';
      this.srcMobile = 'assets/images/bg-mobile-light.jpg';
      if(this.body){
        this.body.style.backgroundColor = "hsl(236, 33%, 92%)"
        this.body.style.transition = "1s ease "


      }
    } else {
      this.srcDesktop = 'assets/images/bg-desktop-dark.jpg';
      this.srcMobile = 'assets/images/bg-mobile-dark.jpg';
      if(this.body){
        this.body.style.backgroundColor = "hsl(235, 21%, 11%)"
        this.body.style.transition = "1s ease "
      }
    }
  }
}
