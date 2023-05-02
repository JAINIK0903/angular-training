import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  title: string = 'Welcome to contact page';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
  public goToHome(): void {
    // write business logic
    // call API
    // handle response
    // then navigate

    this.router.navigate(['/']);
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

    this.router.navigate(['/contact'], { relativeTo: this.activatedRoute });
  }
}
