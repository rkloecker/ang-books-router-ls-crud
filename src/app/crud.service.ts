import { Injectable } from "@angular/core";
import { Book } from "./book";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  constructor() {}
  getAll(): Book[] {
    return JSON.parse(localStorage.getItem("theCollection")) || [];
  }

  add(book: Book) {
    this.save([...this.getAll(), book]);
  }

  update(book: Book) {
    this.save(this.getAll().map(el => (el.id === book.id ? book : el)));
  }

  getItem(id: String): Book {
    return this.getAll().filter(el => el.id === id)[0];
  }

  remove(id: String) {
    this.save(this.getAll().filter(el => el.id !== id));
  }

  save(coll: Book[]) {
    localStorage.setItem("theCollection", JSON.stringify(coll));
  }
}
