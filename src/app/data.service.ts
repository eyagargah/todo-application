import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private light = new BehaviorSubject<boolean>(true)

  theme = this.light.asObservable()

  sendTheme(light:boolean){
    this.light.next(light)
  }
  constructor() { }
}
