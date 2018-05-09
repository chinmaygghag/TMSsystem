import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GetOrdersService} from "../../../services/merchant/get-orders.service";
import {MerchantServicesService} from "../../../services/merchant/merchant-services.service";
import {SaveUserDataService} from "../../../services/miscService/save-user-data.service";
import {FlashMessagesService} from "angular2-flash-messages";



@Component({
  selector: 'app-received-orders-from-merchant',
  templateUrl: './received-orders-from-merchant.component.html',
  styleUrls: ['./received-orders-from-merchant.component.css']
})
export class ReceivedOrdersFromMerchantComponent implements OnInit {

  orders = [];
  agents = [];
  agentSelection = [];

  constructor(private router:Router,
              private getAllOrders:GetOrdersService,
              private getActiveAgents: MerchantServicesService,
              private userDataService: SaveUserDataService,
              private _flashMessagesService: FlashMessagesService,) { }

  ngOnInit() {

    if (this.userDataService.merchant != null) {


      this.getAllOrders.getOrdersForMerchant().subscribe(
        data => {
          if (data.success) {

            data.orders.forEach(i => {
              const imageUrl = i.catalogImage;
              console.log(imageUrl);
              console.log(i._id);
              console.log(i);
              if (i._id != undefined)
                this.orders.push(new Orders(
                  i._id,
                  imageUrl,
                  i.catalog,
                  i.cost,
                  i.clothName,
                  i.length,
                  i.username,
                  i.address
                  )
                );
            });
          }
        });

      this.getActiveAgents.getActiveAgents().subscribe(
        data => {
          if (data.success) {
            this.agents.push("Select an Agent");
            data.agent.forEach(i => {
              if (i.name != undefined) {
                this.agents.push(i.name);
              }
            });
          }
        });
    } else {
      this.router.navigate(['/merchant/login']);
    }
  }
  changeAgent(val:any,i){
    this.agentSelection[i] = val;
  }


  assignAgent(orderId,agentName){
    if(agentName != "Select an Agent"){
    const index: number = this.orders.indexOf(orderId);
    console.log(index);
    const orderParam = {
      id: orderId,
      agentName: agentName
    };
    this.getActiveAgents.assignAgent(orderParam).subscribe(data=>{
      if (data.success){
        console.log("Order Assigned to agent");
        this.orders.splice(index,1)
      } else{
        console.log("Could Not Assign Order");
      }
    })
    }else{
      this._flashMessagesService.show('Please Select an Agent', {cssClass: 'alert-success', timeout: 3000});
    }
 }
}

class Orders{
  constructor(private id: String,
              private imageURL: String,
              private catalog: String,
              private cost: String,
              private clothName: String,
              private length: String,
              private username: String,
              private address: String){

  }


}
