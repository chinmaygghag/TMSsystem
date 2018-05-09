import { Component, OnInit } from '@angular/core';
import {GetOrdersService} from "../../services/merchant/get-orders.service";
import {Router} from "@angular/router";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import { FlashMessagesService } from 'angular2-flash-messages';

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
              private saveUserSession: SaveUserDataService,
              private _flashMessagesService: FlashMessagesService) {
  }

  ngOnInit() {
    if (this.saveUserSession.agentName != null) {
      console.log(this.saveUserSession.agentName);
      const orderParam = {
        "agentName": this.saveUserSession.agentName,
        "status": "Received"
      };

      this.getAllOrders.getOrdersForAgentWaiting(orderParam).subscribe(data => {
        data.order.forEach(i => {
          console.log(i);
          const imageUrl = i.catalogImage;
          if (i._id != undefined)
            this.orders.push(new Orders(i._id,imageUrl, i.clothName, i.cost, i.length)
            );
        });
      });
    }else{
      this.router.navigate(['/agent/login']);
    }
  }


  acceptOrder(item){
    const index: number = this.orders.indexOf(item);
    const itemToBeAccepted = {
      orderId : item.id,
      status: "Accept"
    };
    console.log(itemToBeAccepted);
    this.getAllOrders.acceptDeclineOrder(itemToBeAccepted).subscribe(data => {
      if (data.success){
        this.orders.splice(index,1)
        this._flashMessagesService.show('Order Approved', { cssClass: 'alert-success', timeout: 1000 });
      }else{

      }
    })
  }

  declineOrder(item){
    const index: number = this.orders.indexOf(item);
    const itemToBeAccepted = {
      orderId : item.id,
      status: "Decline"
    };
    this.getAllOrders.acceptDeclineOrder(itemToBeAccepted).subscribe(data => {
      if (data.success){
        this.orders.splice(index,1);
        this._flashMessagesService.show('Order Declined', { cssClass: 'alert-success', timeout: 1000 });
      } else{

      }
    })
  }
}

class Orders{
  constructor(private id: String,
              private imageUrl:String,
              private clothName: String,
              private cost: String,
              private length: String){

  }
}
