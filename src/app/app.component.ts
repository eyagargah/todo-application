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

  ngOnInit() {}

  newthemeChange(light: any) {
    this.light = light;
    if (this.light) {
      this.src = 'assets/images/bg-desktop-light.jpg';
    } else {
      this.src = 'assets/images/bg-desktop-dark.jpg';
    }
  }
}
