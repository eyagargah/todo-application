import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './pages/task/task.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

let tasks: any;

@NgModule({
  declarations: [AppComponent, TaskComponent, TaskListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  static light: any;
  static tasks: any;

  ngOnInit() {}
}
