import { Component, OnInit } from '@angular/core';
import {CartServiceService} from "../../../services/cart/cart-service.service";
import {SaveUserDataService} from "../../../services/miscService/save-user-data.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  totalCost: number;

  constructor(private cartService : CartServiceService,
              private userDataService: SaveUserDataService) { }

  ngOnInit() {
    const username = {
      username : this.userDataService.username
    };
    this.cartService.getCartElement(username).subscribe(data=>{
      if (data.success){
        data.cartItems.forEach(

          i=>{
            const image =  "../" + i.catalogImage;
            this.totalCost = this.totalCost + i.totalCost;
            this.cartItems.push(new CartItem(image,i.catalogName,i.lengthEntered,i.totalCost,i.clothName));
          }
        )
      }
    })
  }

}

class CartItem {
  constructor(public imageURL: String,
              public title: String,
              public length: String,
              public totalCost: String,
              public typeOfCloth: String) {
  }

}
