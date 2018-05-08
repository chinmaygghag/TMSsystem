import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlaceOrderService} from "../../services/placeorders/place-order.service";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";


@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {

  pastOrder = [];


  constructor(private placeOrder: PlaceOrderService,
              private userDataService: SaveUserDataService,
              private router: Router) { }

  ngOnInit() {

    if(this.userDataService.username != null){
      console.log(this.userDataService.username);
      const username = {
        username : this.userDataService.username
      };
      this.placeOrder.getPastOrders(username).subscribe(data=>{
        if (data.success) {
          console.log(data.orders);
          if(data.orders != null && data.orders.length > 0 ){
            data.orders.forEach(i => {
            console.log(i);
            if(i != undefined){
            this.pastOrder.push(new Order(i.catalogImage,i.clothType,i.length,i.catalog,i.cost));
            }
          });
          }else{
            console.log("Nothing Here");
          }
        }
      })
    }else{
      this.router.navigate(['/user/login']);
    }
  }

  }


class Order{
  constructor(public catalogImage: String,
    public clothName: String,
    public length: String,
    public catalog: String,
    public cost: String){

  }
}
