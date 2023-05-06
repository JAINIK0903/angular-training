import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  errorMessage!: string;
  subscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.errorMessage = this.activatedRoute.snapshot.data['message'];
    this.activatedRoute.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
