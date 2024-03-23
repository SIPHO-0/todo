import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppComponent } from './app.component';
import { TaskListComponent } from './layout/tasklist/task-list/task-list.component';
import { TasklistComponent } from './layout/tasklist/tasklist.component';
const routes: Routes = [{
  path: '', component: AppLayoutComponent,
  children: [{
    path: '' , component: TasklistComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
