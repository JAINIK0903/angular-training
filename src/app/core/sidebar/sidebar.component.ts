import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   openSidebar = () => {
    document.getElementById("mySidebar")!.style.width = "250px";
     document.getElementById("main")!.style.marginLeft = "250px";
};

 closeSidebar = () => {
    document.getElementById("mySidebar")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft = "0";
};
}
