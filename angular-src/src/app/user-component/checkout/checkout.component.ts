import { Component, OnInit } from '@angular/core';
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import {Router} from "@angular/router";
import {CartServiceService} from "../../services/cart/cart-service.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Placeholder} from "@angular/compiler/src/i18n/i18n_ast";
import {PlaceOrderService} from "../../services/placeorders/place-order.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  address1: string;
  address2: string;
  cartItems = [];
  name: string;
  constructor(private saveUserData: SaveUserDataService,
              private router: Router,
              private cartService : CartServiceService,
              private _flashMessagesService: FlashMessagesService,
              private placeOrder: PlaceOrderService) {
  }

  ngOnInit() {
      if (this.saveUserData.username != null){
        const username = {
          "username" : this.saveUserData.username
        };
        this.cartService.getCartElement(username).subscribe(data=>{
          if (data.success){
            console.log(data);
            data.cartItems.forEach(
              i=>{
                const order = {
                  "cartId": i._id,
                  "catalog": i.catalogName,
                  "catalogImage" : i.catalogImage,
                  "cost" : i.totalCost,
                  "length": i.lengthEntered,
                  "clothName": i.clothName,
                };
                this.cartItems.push(order);
              }
            );
          }
        });

      } else {
        this.router.navigate(['/user/login']);
      }
    }

  checkout(){
    const address = this.address1 + " " + this.address2;
    const placeOrder = {
      "username" : this.saveUserData.username,
      "address" : address,
      "orders" : this.cartItems
    };
    this.placeOrder.placeOrders(placeOrder).subscribe(data=>{
      if(data.success){
        this._flashMessagesService.show('Order Placed Successfully', {cssClass: 'alert-success', timeout: 3000});
        // this.router.navigate(['/user/home/viewcatalog']);
      }else{
        console.log("Here in error of place order");
      }
    });
  }
}
class CartItem {
  constructor(public cartId: String,
              public imageURL: String,
              public title: String,
              public length: String,
              public totalCost: String,
              public typeOfCloth: String,
              public id:String) {
  }

}
