import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './pages/task/task.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

let tasks:any = basicLoader

export function basicLoader(httpClient: HttpClient){
  return ()=> {
    const response =  httpClient.get('http://localhost:8000/tasks');
    
    return response.subscribe( r=> console.log(r))

  }
}
@NgModule({
  declarations: [AppComponent, TaskComponent, TaskListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: basicLoader,
      deps: [HttpClient],
      multi: true,
    },
    AppModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  static light: any;
  static tasks: any;
  
  ngOnInit(){
    
  }
}
