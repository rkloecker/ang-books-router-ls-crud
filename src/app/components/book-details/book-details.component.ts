import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CrudService } from "src/app/crud.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.css"]
})
export class BookDetailsComponent implements OnInit {
  bookId: String;
  book: any;
  sub: any;
  // @Input() book;
  // @Output() deleteBook: EventEmitter<any> = new EventEmitter();

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
    this.book = this.crudService.getItem(this.bookId);
  }

  deleteBook() {
    // this.deleteBook.emit(book);
    this.crudService.remove(this.bookId);
    this.router.navigate([""]);
  }
}
