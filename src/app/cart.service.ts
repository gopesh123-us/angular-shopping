import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor() {}
  items = [];

  //note - procuct is not defined -- why?
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
