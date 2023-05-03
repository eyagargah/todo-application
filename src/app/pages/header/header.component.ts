import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() themeEvent = new EventEmitter<any>();
  light: boolean = true;
  src = 'assets/images/icon-sun.svg';
  img = document.querySelector('img')
 
  themeChange(e:any) {
    if (this.src == 'assets/images/icon-moon.svg') {
      this.src = 'assets/images/icon-sun.svg';
      if(this.img) {
        this.img.style.transitionDelay = "2s ease "
      }
      this.light = true;
    } else {
      this.src = 'assets/images/icon-moon.svg';
      this.light = false;
      if(this.img) {
        this.img.style.transitionDelay = "2s ease "
      }
    }
    this.themeEvent.emit(this.light)
  }
}
