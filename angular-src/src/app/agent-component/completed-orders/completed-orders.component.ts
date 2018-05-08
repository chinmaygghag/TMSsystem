import { Component, OnInit } from '@angular/core';



import {Router} from "@angular/router";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";

import {Headers, Http} from "@angular/http";



@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.css']
})
export class CompletedOrdersComponent implements OnInit {
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
nextStatus:string;
currentStatus:String;

    constructor(private router: Router,private http: Http,private userDataService: SaveUserDataService) { }

  ngOnInit() {

    if(this.userDataService.agentName != null){
    const username = {
      username : this.userDataService.agentName
    };
    console.log(this.userDataService.agentName)

    this.getProcessedOrders(username).subscribe(data=>{
      if (data.success){
        const cost = 0;
        console.log(data.success)
        console.log(data.orders)
        data.orders.forEach(

          i=>{
          //  const image =  "../" + i.catalogImage;
          //  this.totalCost += parseInt(i.totalCost) ;
          this.id=i._id;
            this.description=i.catalog;
            this.totalCost=i.cost;
            this.status=i.statusForCustomer;
            this.clothName=i.clothName;
            this.length=i.length;
            this.statusForAgent=i.statusForAgent;

            console.log(i._id);
            console.log(typeof i.totalCost);
            console.log(typeof this.totalCost);
            if(i.statusForAgent=='received'){
              this.currentStatus='received'
              this.nextStatus='supplier'
            }
            if(i.statusForAgent=='supplier'){
              this.currentStatus='supplier'
              this.nextStatus='Dye'
            }
            if(i.statusForAgent=='Dye'){
              this.currentStatus='Dye'
              this.nextStatus='Machinery'
            }
            if(i.statusForAgent=='Machinery'){
              this.currentStatus='Machinery'
              this.nextStatus='Finishing'
            }
            if(i.statusForAgent=='Order Processed'){
              this.currentStatus='Order Processed'
              this.nextStatus='cool'
            }
            this.orderItems.push(new OrderItem(i.catalog,i.clothName,i.statusForCustomer,i.cost,i._id,i.length,i.statusForAgent));
          }
        );
      }
    })
    }
else {
      this.router.navigate(['/user/login']);
    }

  }


  getProcessedOrders(username){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/agents/getProcessedOrders',username,{headers:headers})
      .map(res=>res.json());
  }

}


class OrderItem {
  constructor(public catalog: String,
              public clothName: String,
              public statusForCustomer: String,
              public cost: String,  public id:String,public length:String,public statusForAgent:String) {
  }


}
