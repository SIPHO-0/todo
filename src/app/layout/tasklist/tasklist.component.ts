import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnDestroy  {

  subscription: Subscription;

  todo: Task[] = [];

  completed: Task[] = [];

  constructor(private taskService: TaskService) {
    this.subscription = this.taskService.taskSource$.subscribe(data => this.categorize(data));
}
  
categorize(tasks: Task[]) {
  this.todo = tasks.filter(t => t.completed !== true);
  this.completed = tasks.filter(t => t.completed);
}
  
showDialog() {
  this.taskService.showDialog('Create Task', true);
}
  
ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
