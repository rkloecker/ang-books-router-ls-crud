import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/crud.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  books: [];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.books = this.crudService.getAll();
  }
}
