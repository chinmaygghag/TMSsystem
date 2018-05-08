import { Component, OnInit } from '@angular/core';
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import {Router} from "@angular/router";
import {GetOrdersService} from "../../services/merchant/get-orders.service";



@Component({
  selector: 'app-merchant-order-track',
  templateUrl: './merchant-order-track.component.html',
  styleUrls: ['./merchant-order-track.component.css']
})
export class MerchantOrderTrackComponent implements OnInit {

  orders=['a','b','c','d'];
  orderItems=[];
  cartItems = [];
  totalCost: number = 0;
description:string;
length:string;

x:string;
status:string;
clothName:string;
id:string;
statusForAgent:string;
statusForMerchant:string;
nextStatus:string;
currentStatus:String;
  constructor(private router: Router,
              private getAllOrders:GetOrdersService,
              private userDataService: SaveUserDataService) { }

  ngOnInit() {
    if(this.userDataService.merchant != null) {
      this.getAllOrders.getAllOrdersForMerchant().subscribe(data => {
        if (data.success) {
          const cost = 0;
          console.log(data.success)
          data.orders.forEach(
            i => {
              //  const image =  "../" + i.catalogImage;
              //  this.totalCost += parseInt(i.totalCost) ;
              this.id = i._id;
              this.description = i.catalog;
              this.totalCost = i.cost;
              this.status = i.statusForCustomer;
              this.clothName = i.clothName;
              this.length = i.length;
              this.statusForAgent = i.statusForAgent;
              this.statusForMerchant = i.statusForMerchant;

              console.log(i._id);
              console.log(typeof i.totalCost);
              console.log(typeof this.totalCost);
              if (i.statusForAgent == 'received') {
                this.currentStatus = 'received'
                this.nextStatus = 'supplier'
              }
              if (i.statusForAgent == 'supplier') {
                this.currentStatus = 'supplier'
                this.nextStatus = 'Dye'
              }
              if (i.statusForAgent == 'Dye') {
                this.currentStatus = 'Dye'
                this.nextStatus = 'Machinery'
              }
              if (i.statusForAgent == 'Machinery') {
                this.currentStatus = 'Machinery'
                this.nextStatus = 'Finishing'
              }
              if (i.statusForAgent == 'Order Processed') {
                this.currentStatus = 'Order Processed'
                this.nextStatus = ''
              }
              this.orderItems.push(new OrderItem(i.catalogImage,i.catalog, i.clothName, i.statusForCustomer, i.cost, i._id, i.length, i.statusForAgent, i.statusForMerchant));
            }
          );
        }
      });
    }else{
      this.router.navigate(['/merchant/login']);
    }

  }



}

class OrderItem {
  constructor(public imageUrl:String,
    public catalog: String,
              public clothName: String,
              public statusForCustomer: String,
              public cost: String,  public id:String,public length:String,public statusForAgent:String,public statusForMerchant:String) {
  }
}
