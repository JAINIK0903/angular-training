import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterstudentPipe',
})
export class FilteronePipe implements PipeTransform {
  transform(students: Array<any>, filterText: string) {
    if (students.length === 0 || filterText === '') {
      return students;
    } else {
      return students.filter((student) => {
        return student.name === filterText;
      });
    }
  }
}
