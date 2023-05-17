import { Component } from '@angular/core';
import { Observable, Subject, Subscription, catchError, debounceTime, distinctUntilChanged, forkJoin, from, of, switchMap, take, takeUntil, tap, timer } from 'rxjs';
import { RxjsOperatorService } from 'src/app/service/rxjs-operator.service';

@Component({
  selector: 'app-operators-demo',
  templateUrl: './operators-demo.component.html',
  styleUrls: ['./operators-demo.component.scss']
})
export class OperatorsDemoComponent {
  title: string = 'Observable-Demo';
  api$!: Observable<any>;
  subscriptions: Subscription[] = [];
  searchText!: string;
  breeds$!: Observable<any>;
  searchBreed$ = new Subject<string>();

  constructor(private RxjsOperatorService: RxjsOperatorService) { }

  ngOnInit(): void {
    this.searchBreed();
  }

  onClickOfOperator() {
    this.subscriptions.push(this.RxjsOperatorService.ofOperator().subscribe(res => {
      console.log(res);
    }));
  }

  onClickOfOperatorWithList() {
    this.subscriptions.push(this.RxjsOperatorService.ofOperatorWithList().subscribe(res => {
      console.log(res);

    }))
  }

  onClickFromOperator() {
    this.subscriptions.push(this.RxjsOperatorService.fromOperator().subscribe(res => {
      console.log(res);

    }))
  }

  onClickConcatWithOperator() {
    this.subscriptions.push(this.RxjsOperatorService.concatWithOperator().subscribe(res => {
      console.log(res);

    }))
  }

  onClickMergeOperator() {
    this.subscriptions.push(this.RxjsOperatorService.mergeOperator().subscribe(res => {
      console.log(res);

    }))
  }

  onClickMapOperator() {
    this.subscriptions.push(this.RxjsOperatorService.mapOperator().subscribe(res => {
      console.log(res);

    }))
  }

  onClickConcatMapOperator() {
    this.subscriptions.push(this.RxjsOperatorService.concatMapWithAPI()
      .subscribe(res => {
        console.log('Concat Map with API operator called :- ', res);
      }));
  }

  onClickMergeMapOperator() {
    this.subscriptions.push(this.RxjsOperatorService.mergeMap()
      .subscribe(res => {
        console.log('Merge Map operator called :- ', res);
      }));
  }

  onClickSwitchMapOperator() {
    this.subscriptions.push(this.RxjsOperatorService.switchMap()
      .subscribe(res => {
        console.log('Switch Map operator called :- ', res);
      }));
  }

  onClickTakeOperator() {
    this.subscriptions.push(this.RxjsOperatorService.concatMapWithAPI()
      .pipe(take(2))
      .subscribe(res => {
        console.log('Take operator called :- ', res);
      }));
  }

  onClickTakeUntilOperator() {
    const timer$ = timer(4000);

    this.subscriptions.push(this.RxjsOperatorService.takeUntil()
      .pipe(takeUntil(timer$))
      .subscribe(res => {
        console.log('Take Until operator called :- ', res);
      }));
  }

  onClickForkJoinOperator() {
    const observer1 = this.RxjsOperatorService.getDogBreed('hound');
    const observer2 = this.RxjsOperatorService.getDogBreed('mastiff');
    const observer3 = this.RxjsOperatorService.getDogBreed('retriever');

    forkJoin([observer1, observer2, observer3]).subscribe(results => {
      console.log('forkJoin data :- ', results);
    }, error => {
      console.log('Error in forkJoin data :- ', error);
    });
  }

  search() {
    this.searchBreed$.next(this.searchText);
  }

  searchBreed() {
    this.breeds$ = this.searchBreed$.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap(searchText => this.searchBreedApi(searchText))
    );
  }

  searchBreedApi(searchText: string): Observable<any> {
    if (searchText) {
      return from(this.RxjsOperatorService.getDogBreed(searchText))
        .pipe(
          catchError((error) => {
            return of({});
          }),
          tap(() => console.log('Searching......'))
        );
    }
    return of({});
  }

  onClickShareReplyOperator() {
    this.RxjsOperatorService.shareReply().subscribe((res) => {
      console.log('Observer1 :- ', res);
    });
    this.RxjsOperatorService.shareReply().subscribe((res) => {
      console.log('Observer2 :- ', res);
    });

    setTimeout(() => {
      this.RxjsOperatorService.shareReply().subscribe((res) => {
        console.log('Observer3 :- ', res);
      });
    }, 1200);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }
}
