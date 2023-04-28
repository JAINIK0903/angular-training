import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() data: string = '';
  firstName: string = 'Jainik';
  lastName: string = 'Suthar';
  @ViewChild('firstNameDiv') firstNameDiv: ElementRef | undefined;
  @ViewChild('lastNameDiv') lastNameDiv: ElementRef | undefined;
  @ContentChild('parentHook') parentHook: ElementRef | undefined;
  isDisplay: boolean = false;
  @Output() emitData = new EventEmitter<string>();
  @Output() emitData1 = new EventEmitter<string>();
  @Input() data1: string = 'Jainik0903';

  constructor() {
    console.log('constructor is called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ng on changes method called');
  }

  ngOnInit(): void {
    console.log('ng on init method called');
    console.log(
      'first name div :- ',
      this.firstNameDiv?.nativeElement.textContent
    );
    console.log('parentHook :- ', this.parentHook?.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ng do check called');
  }

  ngAfterContentInit(): void {
    console.log('ng after content init called');
    console.log('parentHook :- ', this.parentHook?.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ng after content checked called');
  }

  ngAfterViewInit(): void {
    console.log('ng after view init called');
    console.log(
      'first name div :- ',
      this.firstNameDiv?.nativeElement.textContent
    );
  }

  ngAfterViewChecked(): void {
    console.log('ng after view checked called');
  }

  ngOnDestroy(): void {
    console.log('ng on destroy called');
  }

  public clickMe(): void {
    this.emitData.emit('Data coming from child to parent');
    this.emitData.emit('event data is coming from child to parent');
  }
}
