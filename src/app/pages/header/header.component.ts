import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() themeEvent = new EventEmitter<any>();
  light: any;
  src = 'assets/images/icon-moon.svg';
  img = document.querySelector('img');
  constructor(private cookiesService: CookieService , private data: DataService) {}

  ngOnInit(){
    this.data.theme.subscribe( (light: any) => this.light = light)
  }
 
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

  newTheme(){
    this.data.sendTheme(this.light)
    console.log("🚀 ~ file: header.component.ts:41 ~ HeaderComponent ~ newTheme ~ light:", this.light)
    
  }
}
