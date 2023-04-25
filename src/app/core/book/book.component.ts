import { Component, Input } from '@angular/core';
import { Ibook } from '../Interface/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  public readMore: string = 'Read more';
  @Input() book!: Ibook; 
  public displayBookTitle = (title: string) => {
    console.log(title);
  };
}
