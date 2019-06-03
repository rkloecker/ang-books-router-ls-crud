import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/crud.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Book } from "../../book";

@Component({
  selector: "app-edit-books",
  templateUrl: "./edit-books.component.html",
  styleUrls: ["./edit-books.component.css"]
})
export class EditBooksComponent implements OnInit {
  bookId: String;
  book: Book;
  // sub: any;
  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private router: Router
  ) {}

  // ngOnInit() {
  //   this.sub = this.route.params.subscribe(params => {
  //     this.bookId = params["id"];
  //     this.book = this.crudService.getItem(this.bookId);
  //   });
  // }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get("id");
    this.book = this.crudService.getItem(this.bookId);
  }
  onSubmit() {
    this.crudService.update(this.book);
    this.router.navigate([""]);
  }
}
