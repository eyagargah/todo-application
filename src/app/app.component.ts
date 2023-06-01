import { Component  } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';
  srcDesktopLight = 'assets/images/bg-desktop-light.jpg';
  srcDesktopDark = 'assets/images/bg-desktop-dark.jpg';
  srcMobileDark = 'assets/images/bg-mobile-dark.jpg';
  srcMobileLight = 'assets/images/bg-mobile-light.jpg';

  tasks: any;
  light: boolean | undefined;
  screenSize = window.screen.availWidth < 600;
  body = document.querySelector('body');



  ngOnInit() {
    if (this.body && !this.screenSize) {
      this.body.style.backgroundImage = `url(${this.srcDesktopLight})`;
      this.body.style.backgroundSize = `cover`;
      this.body.style.backgroundRepeat = `no-repeat`;
    }
    if (this.body && this.screenSize) {
      this.body.style.backgroundImage = `url(${this.srcMobileLight})`;
      this.body.style.backgroundSize = `cover`;
      this.body.style.backgroundRepeat = `no-repeat`;
    }
  }

 

  newthemeChange(light: any) {
    this.light = light;
    if (this.light && this.body && this.screenSize) {
      this.body.style.backgroundImage = `url(${this.srcMobileLight})`;
      this.body.style.backgroundColor = 'hsl(236, 33%, 92%)';
      this.body.style.transition = '1s ease ';
      this.body.style.backgroundSize = `cover`;
      this.body.style.backgroundRepeat = `no-repeat`;
    }

    if (this.light && this.body && !this.screenSize) {
      this.body.style.backgroundImage = `url(${this.srcDesktopLight})`;
      this.body.style.backgroundColor = 'hsl(236, 33%, 92%)';
      this.body.style.transition = '1s ease ';
      this.body.style.backgroundSize = `cover`;
      this.body.style.backgroundRepeat = `no-repeat`;
    }

    if (this.body && !this.light && this.screenSize) {
      this.body.style.backgroundImage = `url(${this.srcMobileDark})`;
      this.body.style.backgroundColor = 'hsl(235, 21%, 11%)';
      this.body.style.transition = '1s ease ';
      this.body.style.backgroundSize = `cover`;
      this.body.style.backgroundRepeat = `no-repeat`;
    }

    if (this.body && !this.light && !this.screenSize) {
      this.body.style.backgroundImage = `url(${this.srcDesktopDark})`;
      this.body.style.backgroundColor = 'hsl(235, 21%, 11%)';
      this.body.style.transition = '1s ease ';
      this.body.style.backgroundSize = `cover`;
      this.body.style.backgroundRepeat = `no-repeat`;
    }
  }
}
