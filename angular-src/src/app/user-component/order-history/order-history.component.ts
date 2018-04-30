import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GetOrdersService} from "../../services/merchant/get-orders.service";
import {PlaceOrderService} from "../../services/placeorders/place-order.service";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders = [];

  constructor(private router: Router,
              private getAllOrders: GetOrdersService,
              private userDataService: SaveUserDataService,
              private placeOrder: PlaceOrderService) {
  }

  ngOnInit() {
    console.log(" username : " +this.userDataService.username);
    if (this.userDataService.username != null) {
      const username = {
        username: this.userDataService.username
      };
      console.log("Here in init");
      this.placeOrder.getOrdersbyUsename(username).subscribe(
        data => {
          if (data.success) {
            console.log(data);
           /* data.orders.forEach(i => {
              console.log(i);
              // if(i._id != undefined)
              this.orders.push(i.catalogImage + "\n" +
                i.clothName + "\n" +
                i.length + "\n" +
                // i.type + "\n" +
                i.cost
              );
            });*/
          }
        });
    }

  }
}
