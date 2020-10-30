import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartservice: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartservice.getItems();
  }

  onSubmit(customerData) {
    //Process checkout data here
    this.items = this.cartservice.clearCart();
    this.checkoutForm.reset();
    console.warn("Your order has been submitted", customerData);
  }
}
