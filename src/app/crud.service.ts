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
    // if id is not known or fake or whatever: return default 'book'
    // const defaultbook = {
    //   title: "title unknown",
    //   author: "author unknown",
    //   id: "unknown id"
    // } as Book;
    return this.getAll().filter(el => el.id === id)[0];
    //  || defaultbook;
  }

  remove(id: String) {
    this.save(this.getAll().filter(el => el.id !== id));
  }

  save(coll: Book[]) {
    localStorage.setItem("theCollection", JSON.stringify(coll));
  }
}
