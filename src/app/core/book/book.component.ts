import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  readMore:string = 'Read more>';
  @Input() book: any ;
  public displayBookTitle = (title: string) => {
    console.log(title);
  };
}
