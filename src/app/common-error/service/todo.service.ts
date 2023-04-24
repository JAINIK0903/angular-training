import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private list: { id: number, name: string }[] = [];

  addTask(task: string) {
    if (task) {
      const newId = this.list.length + 1;
      this.list.push({ id: newId, name: task });
    }
  }

  deleteTask(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }

  getList() {
    return this.list;
  }
}
