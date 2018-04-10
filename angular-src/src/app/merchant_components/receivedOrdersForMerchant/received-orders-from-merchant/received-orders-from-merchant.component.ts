import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GetOrdersService} from "../../../services/merchant/get-orders.service";

@Component({
  selector: 'app-received-orders-from-merchant',
  templateUrl: './received-orders-from-merchant.component.html',
  styleUrls: ['./received-orders-from-merchant.component.css']
})
export class ReceivedOrdersFromMerchantComponent implements OnInit {

  orders = [];

  constructor(private router:Router,
              private getAllOrders:GetOrdersService) { }

  ngOnInit() {
    this.orders.push(new Orders("http://piedmontfabrics.com/wp-content/uploads/2014/12/JapaneseCotton.png",
      "This is just the demo data",
      "50$",
      "5in"))


    this.orders.push(new Orders("http://piedmontfabrics.com/wp-content/uploads/2014/12/JapaneseCotton.png",
      "This is just the demo data",
      "50$",
      "5in"))

    this.orders.push(new Orders("http://piedmontfabrics.com/wp-content/uploads/2014/12/JapaneseCotton.png",
      "This is just the demo data",
      "50$",
      "5in"))

    this.orders.push(new Orders("http://piedmontfabrics.com/wp-content/uploads/2014/12/JapaneseCotton.png",
      "This is just the demo data",
      "50$",
      "5in"))
    this.orders.push(new Orders("http://piedmontfabrics.com/wp-content/uploads/2014/12/JapaneseCotton.png",
      "This is just the demo data",
      "50$",
      "5in"))
    this.orders.push(new Orders("http://piedmontfabrics.com/wp-content/uploads/2014/12/JapaneseCotton.png",
      "This is just the demo data",
      "50$",
      "5in"))

  }

}

class Orders{
  constructor(private imageUrl:String,
              private desc: String,
              private cost: String,
              private length: String){

  }
}
