import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public menuItems = [
    { label: "Today's deal", link: '#' },
    { label: 'Best Seller', link: '#' },
    { label: 'About', link: '#' },
    { label: 'Contact', link: '#' },
    { label: 'Filters', link: '#' },
  ];
  public filters = [
    { type: 'checkbox', name: 'Robi Sen' },
    { type: 'checkbox', name: 'W. Frank Ableson' },
    { type: 'checkbox', name: 'Rob Allen' },
  ];
  @Output() newItemEvent = new EventEmitter<string>();
  public changeBackground = (): void => {
    this.newItemEvent.emit();
  };

  public openSidebar = (): void => {
    document.getElementById('mySidebar')!.style.width = '250px';
    document.getElementById('main')!.style.marginLeft = '250px';
  };

  public closeSidebar = (): void => {
    document.getElementById('mySidebar')!.style.width = '0';
    document.getElementById('main')!.style.marginLeft = '0';
  };
}
