import { Component, OnInit } from '@angular/core';
import {CartServiceService} from "../../../services/cart/cart-service.service";
import {SaveUserDataService} from "../../../services/miscService/save-user-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  totalCost: number = 0;

  constructor(private cartService : CartServiceService,
              private userDataService: SaveUserDataService,
              private router: Router) { }


  ngOnInit() {
    if(this.userDataService.username != null){
    const username = {
      username : this.userDataService.username
    };
    this.cartService.getCartElement(username).subscribe(data=>{
      if (data.success){
        const cost = 0;
        data.cartItems.forEach(

          i=>{
            const image =  "../" + i.catalogImage;
            this.totalCost += parseInt(i.totalCost) ;
            console.log(typeof i.totalCost);
            console.log(typeof this.totalCost);
            this.cartItems.push(new CartItem(image,i.catalogName,i.lengthEntered,i.totalCost,i.clothName));
          }
        );
      }
    })
  }else{
      this.router.navigate(['/user/login']);
    }
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
