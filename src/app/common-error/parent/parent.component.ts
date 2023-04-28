import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  public firstName = undefined;
  public lastName = undefined;
  constructor() {}
  ngOnInit(): void {}
  public dataReceiver(data: string) {
    console.log(data);
  }
  public receiveMessage(data: string) {
    console.log(data);
  }
}
