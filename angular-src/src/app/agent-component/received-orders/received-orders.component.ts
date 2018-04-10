import { Component, OnInit } from '@angular/core';
import {GetOrdersService} from "../../services/merchant/get-orders.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-received-orders',
  templateUrl: './received-orders.component.html',
  styleUrls: ['./received-orders.component.css']
})
export class ReceivedOrdersComponent implements OnInit {

  orders = [];

  constructor(private router:Router,
              private getAllOrders:GetOrdersService) { }

  ngOnInit() {
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
