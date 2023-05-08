import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() themeEvent = new EventEmitter<any>();
  light: any = this.cookiesService.get('light');
  src = 'assets/images/icon-moon.svg';
  img = document.querySelector('img');
  constructor(private cookiesService: CookieService) {}

  themeChange(e: any) {
    if (this.src == 'assets/images/icon-sun.svg') {
      this.light = true;
      this.src = 'assets/images/icon-moon.svg';
      if (this.img) {
        this.img.style.transitionDelay = '2s ease ';
      }
    } else {
      this.src = 'assets/images/icon-sun.svg';
      this.light = false;
      
      if (this.img) {
        this.img.style.transitionDelay = '2s ease ';
      }
    }
    this.themeEvent.emit(this.light);
  }
}
