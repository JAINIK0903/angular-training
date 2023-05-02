import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title: string = 'Welcome to home page';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  public goToContact(): void {
    // write business logic
    // call API
    // handle response
    // then navigate

    this.router.navigate(['/contact']);
  }

  public goToAboutus(): void {
    // write business logic
    // call API
    // handle response
    // then navigate

    this.router.navigate(['/aboutus']);
  }
  public reloadPage(): void {
    // write business logic
    // call API
    // handle response
    // then navigate
    console.log('activatedRoute :- ', this.activatedRoute);

    this.router.navigate(['/'], { relativeTo: this.activatedRoute });
  }
}
