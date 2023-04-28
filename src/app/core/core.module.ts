//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BookListComponent,
    BookComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BookListComponent,
    BookComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
