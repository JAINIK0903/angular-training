import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, concatWith, from, interval, map, merge, mergeMap, of, shareReplay, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsOperatorService {
  user: object[] = [{ name: 'Jainik', gender: 'Male' }, { name: 'Mohit', gender: 'Male' }, { name: 'Nirmit', gender: 'Male' }]

  constructor(private http: HttpClient) { }
  ofOperator(): Observable<string> {
    let string$ = of('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J');
    return string$;
  }

  ofOperatorWithList(): Observable<object> {
    let user$ = of(this.user);
    return user$;
  }

  fromOperator(): Observable<number> {
    let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let number$ = from(numberArray);
    return number$;
  }

  concatWithOperator(): Observable<number> {
    let number1$ = of(1, 2, 3, 4, 5);
    let number2$ = of(6, 7, 8, 9, 10);
    let concat$ = number1$.pipe(concatWith(number2$));
    return concat$;
  }

  mergeOperator(): Observable<number> {
    const number1$ = interval(1000);
    const number2$ = interval(1500);
    const merged$ = merge(number1$, number2$);
    return merged$
  }

  mapOperator(): Observable<number> {
    const number1$ = of(1, 2, 3, 4, 5);
    const mapped$ = number1$.pipe(map((res) => res + 10))
    return mapped$
  }

  concatMapWithAPI(): Observable<any> {
    const breed$ = of('hound', 'mastiff', 'retriever'); // outer/source observable
    const concatMapped$ = breed$.pipe(
      concatMap((breed) => {
        const url = 'https://dog.ceo/api/breed/' + breed + '/list';
        return this.http.get<any>(url); // inner observable
      })
    );
    return concatMapped$;
  }

  mergeMap(): Observable<number> {

    const breed$ = of('hound', 'mastiff', 'retriever'); // outer/source observable
    const mergeMapped$ = breed$.pipe(
      mergeMap((breed) => {
        const url = 'https://dog.ceo/api/breed/' + breed + '/list';
        return this.http.get<any>(url); // inner observable
      })
    );
    return mergeMapped$;
  }

  switchMap() {
    const breed$ = of('hound', 'mastiff', 'retriever');
    const switchMapped$ = breed$.pipe(
      switchMap((breed) => {
        const url = 'https://dog.ceo/api/breed/' + breed + '/list';
        return this.http.get<any>(url);
      })
    );
    return switchMapped$;
  }

  takeUntil() {
    const source$ = interval(1000);
    return source$;
  }

  getDogBreed(breed: any): Observable<any> {
    const url = 'https://dog.ceo/api/breed/' + breed + '/list';
    return this.http.get<any>(url);
  }

  shareReply(): Observable<number> {
    // 3 is buffer size, which means it will cache the last 3 emitted values and replay them to new subscribers.
    const source$ = interval(2000).pipe(take(6), shareReplay(3));
    return source$;
  }

}