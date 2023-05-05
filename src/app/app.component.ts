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
  screenSize = window.screen.availWidth

  ngOnInit(){
    console.log(this.screenSize)
    if(this.body){
      this.body.style.backgroundImage = `url(${this.srcDesktop})`;
      this.body.style.backgroundSize = `cover`;
      this.body.style.backgroundRepeat = `no-repeat`;
    }
  }
  body = document.querySelector('body')

  newthemeChange(light: any) {
    this.light = light;
    if (this.light && this.body) {
      this.body.style.backgroundImage = `url(${this.srcDesktop})`;
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
