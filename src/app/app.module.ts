import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BooksComponent } from "./components/books/books.component";
import { AddBooksComponent } from "./components/add-books/add-books.component";
import { EditBooksComponent } from "./components/edit-books/edit-books.component";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBooksComponent,
    EditBooksComponent,
    BookDetailsComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
