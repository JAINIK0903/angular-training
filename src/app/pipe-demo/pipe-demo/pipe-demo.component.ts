import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss'],
})
export class PipeDemoComponent {
  birthday: string = '03/09/2002';
  name: string = 'this is an uppercase text';
  value: string = 'this is a lowercase text';
  args: string = 'this is a titlecase text';
  currency: number = 50;
  decimal: number = 40.43333;
  percent: number = 0.5;
  number: number = 5;
  marks: number = 3;
  filterText: string = '';
  students: Array<any> = [
    {
      name: 'Jainik',
      course: 'web developement',
      marks: '89',
      DOB: '03/09/2002',
      gender: 'male',
    },
    {
      name: 'Mohit',
      course: 'Python and Datascience',
      marks: '90',
      DOB: '02/10/2002',
      gender: 'male',
    },
    {
      name: 'Nirmit',
      course: 'web developement',
      marks: '92',
      DOB: '09/05/2001',
      gender: 'male',
    },
  ];
}
