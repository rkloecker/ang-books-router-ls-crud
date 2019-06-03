import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CrudService {
  constructor() {}
  getAll() {
    return JSON.parse(localStorage.getItem("theCollection")) || [];
  }

  add(item) {
    this.save([...this.getAll(), item]);
  }

  update(item) {
    this.save(this.getAll().map(el => (el.id === item.id ? item : el)));
  }

  getItem(id) {
    return this.getAll().filter(el => el.id === id)[0];
  }

  remove(id) {
    this.save(this.getAll().filter(el => el.id !== id));
  }

  save(coll) {
    localStorage.setItem("theCollection", JSON.stringify(coll));
  }
}
