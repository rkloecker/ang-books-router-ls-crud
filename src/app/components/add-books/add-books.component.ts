import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/crud.service";

@Component({
  selector: "app-add-books",
  templateUrl: "./add-books.component.html",
  styleUrls: ["./add-books.component.css"]
})
export class AddBooksComponent implements OnInit {
  title: string;
  id: string;
  author: string;

  constructor(private crudService: CrudService) {}

  ngOnInit() {}

  onSubmit() {
    const book = {
      title: this.title,
      author: this.author,
      id: Date.now().toString()
    };
    this.crudService.add(book);
    this.title = "";
    this.author = "";
  }
}
