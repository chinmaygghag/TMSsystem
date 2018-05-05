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
      const username = {
        username : this.userDataService.username
      };
      this.placeOrder.getPastOrders(username).subscribe(data=>{




        if (data.success) {
          console.log(data);
          data.pastOrder.forEach(i => {
            console.log(i);
            const order = {
              "catalogImage": i.catalogImage,
              "clothName": i.clothName,
              "length" : i.length,
              "catalog" : i.catalog,
              "cost" : i.cost,

            };
            // if(i._id != undefined)
            this.pastOrder.push(order);
          });
        }


      })
    }else{
      this.router.navigate(['/user/login']);
    }
  }

  }


class order{
  constructor(public catalogImage: String,
    public clothName: String,
    public length: String,
    public catalog: String,
    public cost: String){

  }
}
