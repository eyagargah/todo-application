import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { TaskComponent } from './pages/task/task.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskInputComponent } from './pages/task-input/task-input.component';


@NgModule({
  declarations: [AppComponent, TaskComponent, TaskListComponent, HeaderComponent, TaskInputComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  static light: any;
  static tasks: any;

  ngOnInit() {}
}
