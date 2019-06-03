import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/crud.service";
import { Book } from "../../book";

@Component({
  selector: "app-add-books",
  templateUrl: "./add-books.component.html",
  styleUrls: ["./add-books.component.css"]
})
export class AddBooksComponent implements OnInit {
  book = {} as Book;

  constructor(private crudService: CrudService) {}

  ngOnInit() {}

  onSubmit() {
    this.book.id = Date.now().toString();
    this.crudService.add(this.book);
    this.book.title = "";
    this.book.author = "";
  }
}
