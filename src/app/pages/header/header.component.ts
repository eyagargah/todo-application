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
  ngOnInit() {

  }

  themeChange(e:any) {
    console.log(e.src)
    if (this.src == 'assets/images/icon-moon.svg') {
      this.src = 'assets/images/icon-sun.svg';
      this.light = true;
    } else {
      this.src = 'assets/images/icon-moon.svg';
      this.light = false;
    }
    this.themeEvent.emit(this.light)
  }
}
