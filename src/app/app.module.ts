import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { TaskInputComponent } from './pages/task-input/task-input.component';
import { TaskComponent } from './pages/task/task.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskInputComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
