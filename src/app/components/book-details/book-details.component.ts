import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CrudService } from "src/app/crud.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Book } from "../../book";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  bookId: String;
  book: Book;
  // sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService
  ) {}

  // ngOnInit() {
  //   this.sub = this.route.params.subscribe(params => {
  //     this.bookId = params["id"]; // (+) converts string 'id' to a number
  //     this.book = this.crudService.getItem(this.bookId);
  //   });
  // }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get("id");
    const selectedBook = this.crudService.getItem(this.bookId);
    if (selectedBook) {
      this.book = selectedBook;
    } else {
      this.router.navigate([""]);
    }
  }

  deleteBook() {
    // this.deleteBook.emit(book);
    this.crudService.remove(this.bookId);
    this.router.navigate([""]);
  }
}
