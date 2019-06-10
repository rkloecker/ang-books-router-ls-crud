import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BooksComponent } from "./components/books/books.component";
import { AddBooksComponent } from "./components/add-books/add-books.component";
import { EditBooksComponent } from "./components/edit-books/edit-books.component";
import { BookDetailsComponent } from "./components/book-details/book-details.component";

const routes: Routes = [
  { path: "", component: BooksComponent },
  { path: "books/add", component: AddBooksComponent },
  { path: "books/edit/:id", component: EditBooksComponent },
  { path: "books/:id", component: BookDetailsComponent },
  { path: "**", component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
