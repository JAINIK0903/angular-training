import { Component } from '@angular/core';

@Component({
  selector: 'app-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.scss']
})
export class CommonErrorComponent {
  title = 'To-Do List App';
  addButton = 'Add Task';
  deleteButton = 'Delete';
  newTask!: string;
  list: { id: number, name: string }[] = [];

  addTask() {
    if (this.newTask) {
      const newId = this.list.length + 1;
      this.list.push({ id: newId, name: this.newTask });
      this.newTask = '';
    }
  }

  deleteTask(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }
}
