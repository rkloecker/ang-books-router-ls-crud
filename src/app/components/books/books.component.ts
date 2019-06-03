import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/crud.service";
import { Book } from "../../book";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.books = this.crudService.getAll();
  }
}
