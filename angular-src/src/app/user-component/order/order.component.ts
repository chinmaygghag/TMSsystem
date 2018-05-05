import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlaceOrderService} from "../../services/placeorders/place-order.service";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  activeOrder = [];

  constructor(private placeOrder: PlaceOrderService,
              private userDataService: SaveUserDataService,
              private router: Router) { }

  ngOnInit() {

    if(this.userDataService.username != null){
      const username = {
        username : this.userDataService.username
      };
      this.placeOrder.getActiveOrders(username).subscribe(data=>{




        if (data.success) {
          console.log(data);
          data.activeOrder.forEach(i => {
            console.log(i);
            // if(i._id != undefined)
            this.activeOrder.push(i.catalogImage, i.clothName, i.length, i.catalog, i.cost);
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
