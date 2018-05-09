import { Component, OnInit } from '@angular/core';
var count : number = 0;
var ProgressBar = require('progressbar.js');
import {Router} from "@angular/router";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";

import {Headers, Http} from "@angular/http";


@Component({
  selector: 'app-agent-process',
  templateUrl: './agent-process.component.html',
  styleUrls: ['./agent-process.component.css']
})
export class AgentProcessComponent implements OnInit {
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

    console.log('init');
    if(this.userDataService.agentName != null){
    const username = {
      username : this.userDataService.agentName

    };
    console.log(this.userDataService.agentName);

    this.getAgentReceivedOrders(username).subscribe(data=>{
      if (data.success){
        const cost = 0;
        console.log(data.success);
        console.log(data.orders);
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
            if(i.statusForAgent=='Approved'){
              this.currentStatus='Approved'
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
            if(i.statusForAgent=='Payment Received'){
              this.currentStatus='Payment Received'
              this.nextStatus=''
            }
            this.orderItems.push(new OrderItem(i.catalogImage,i.catalog,i.clothName,i.statusForCustomer,i.cost,i._id,i.length,i.statusForAgent,this.nextStatus,this.currentStatus));
          }
        );
      }
    })
    }else{
      this.router.navigate(['/agent/login']);
    }


//

  }

  getAgentReceivedOrders(username){
    console.log("functions")
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/get_agent_orders',username,{headers:headers})
      .map(res=>res.json());
  }

update(order,stat,pos){
  console.log(order.currentStatus)
  console.log(order.nextStatus)

  if(order.currentStatus=='Approved' && order.nextStatus=='supplier'){
    order.currentStatus=order.nextStatus
    order.nextStatus='Dye';
    this.changeBackend(order.id,order.currentStatus,pos)

 return
    //this.orderIems.find(item => item.id == order.id).nextStatus = ;

  }
  if(order.currentStatus=='supplier' && order.nextStatus=='Dye'){
    order.currentStatus=order.nextStatus
    order.nextStatus='Machinery';
    this.changeBackend(order.id,order.currentStatus,pos)

    //this.orderIems.find(item => item.id == order.id).nextStatus = ;
return
  }
  if(order.currentStatus=='Dye' && order.nextStatus=='Machinery'){
    order.currentStatus=order.nextStatus
    order.nextStatus='Finishing';
    this.changeBackend(order.id,order.currentStatus,pos)

    //this.orderIems.find(item => item.id == order.id).nextStatus = ;
return
  }
  if(order.currentStatus=='Machinery' && order.nextStatus=='Finishing'){
    order.currentStatus='Payment Received'
    order.nextStatus='';
    this.changeFinalBackend(order.id,order.currentStatus,pos)

    //  this.orderItems.splice(pos,1)
  //  this.changeBackend(order.id)
return
    //this.orderIems.find(item => item.id == order.id).nextStatus = ;
  }
  if(order.currentStatus=='Order Processed' && order.nextStatus==''){
  //  order.currentStatus='Order Processed'
  //  this.orderItems.splice(pos,1)

    //order.nextStatus='';


    //this.orderIems.find(item => item.id == order.id).nextStatus = ;
return
  }
}

changeBackend(ordernumber,newstatus,pos){
  const  orderchange= {
    orderId : ordernumber,
    statusToBeUpdated : newstatus
  };


  this.f(orderchange).subscribe(data=>{
    if (data.success){
      const cost = 0;
      console.log(data.success)
      //this.orderItems.splice(pos,1)
      if(newstatus=='Payment Received')
      this.orderItems.splice(pos,1)



    }
  })

//  console.log(orderId)
}
f(orderchange){
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/updateStatus',orderchange,{headers:headers})
    .map(res=>res.json());
}


  changeFinalBackend(ordernumber,newstatus,pos){
    const  orderFinalchange= {
      orderId : ordernumber,
      statusToBeUpdated : newstatus,
      statusMerchant:'Delivered',
      statusCustomer:'ready'
    };


    this.final(orderFinalchange).subscribe(data=>{
      if (data.success){
        const cost = 0;
        console.log(data.success)
        //this.orderItems.splice(pos,1)
        if(newstatus=='Payment Received')
          this.orderItems.splice(pos,1)



      }
    })

//  console.log(orderId)
  }


  final(orderFinalchange){


    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/updateFinalStatus',orderFinalchange,{headers:headers})
      .map(res=>res.json());
  }



}
  class OrderItem {
    constructor(public imageUrl: String,
                public catalog: String,
                public clothName: String,
                public statusForCustomer: String,
                public cost: String,  public id:String,public length:String,public statusForAgent:String,public nextStatus:String,public currentStatus:String) {
    }


}
