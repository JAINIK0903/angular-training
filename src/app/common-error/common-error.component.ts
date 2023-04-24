import { Component } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.scss']
})
export class CommonErrorComponent {
  title = 'To-Do List';
  addButton = 'Add Task';
  deleteButton = 'Delete';
  newTask!: string;

  constructor(private todoService: TodoService) {}

  addTask() {
    this.todoService.addTask(this.newTask);
    this.newTask = '';
  }

  deleteTask(id: number) {
    this.todoService.deleteTask(id);
  }

  get list() {
    return this.todoService.getList();
  }
}
