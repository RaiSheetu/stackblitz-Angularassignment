import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TaskComponent } from 'src/task/task.component';
// import { TaskComponent } from 'src/task/task.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppComponent, TaskComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
