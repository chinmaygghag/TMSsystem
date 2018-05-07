import { Component, OnInit } from '@angular/core';
import {GetOrdersService} from "../../services/merchant/get-orders.service";
import {Router} from "@angular/router";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";

@Component({
  selector: 'app-received-orders',
  templateUrl: './received-orders.component.html',
  styleUrls: ['./received-orders.component.css']
})
export class ReceivedOrdersComponent implements OnInit {

  orders = [];
  agentName: String;
  status: String;

  constructor(private router: Router,
              private getAllOrders: GetOrdersService,
              private saveUserSession: SaveUserDataService) {
  }

  ngOnInit() {
    if (this.saveUserSession.agentName != null) {
      console.log(this.saveUserSession.agentName);
      const orderParam = {
        "agentName": this.saveUserSession.agentName,
        "status": "Received"
      };

      this.getAllOrders.getOrdersForAgent(orderParam).subscribe(data => {
        data.order.forEach(i => {
          const imageUrl = "../" + i.catalogImage;
          console.log(imageUrl);
          console.log(i._id);
          if (i._id != undefined)
            this.orders.push(new Orders(i.catalogImage, i.clothName, i.cost, i.length)
            );
        });
      });
    }else{
      this.router.navigate(['/agent/login']);
    }
  }

}

class Orders{
  constructor(private imageUrl:String,
              private desc: String,
              private cost: String,
              private length: String){

  }
}
