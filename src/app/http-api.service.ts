import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpApiService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any[]> {
    const apiEndPoint = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<any[]>(apiEndPoint);
  }

  public deletePost(id: number) {
    const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts/' + id;
    return this.http.delete<any>(apiEndPoint);
  }
}
