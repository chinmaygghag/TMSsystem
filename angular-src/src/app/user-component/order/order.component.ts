import { Component, OnInit } from '@angular/core';
var ProgressBar = require('progressbar.js');
import {Router} from "@angular/router";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";

import {Headers, Http} from "@angular/http";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router,private http: Http,private userDataService: SaveUserDataService,) { }
  orders=['a','b','c','d'];
  orderItems=[];
  cartItems = [];
  totalCost: number = 0;
description:string;
length:string;
image:string

x:string;
status:string;
clothName:string;
id:string;


  ngOnInit() {
    if(this.userDataService.username != null){
    const username = {
      username : this.userDataService.username
    };
    console.log(this.userDataService.username)

    this.getActiveOrders(username).subscribe(data=>{
      if (data.success){
        if(data.orders != null && data.orders.length > 0 ){
        const cost = 0;
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
            this.image =  "../" + i.catalogImage;


            console.log(i);
            // console.log(typeof i.totalCost);
            // console.log(typeof this.totalCost);
            this.orderItems.push(new OrderItem(i.catalog,i.clothName,i.statusForCustomer,i.cost,i._id,i.length,this.image));
          }
        );
        }else{
          console.log("Nothing Here");
        }
      }
    })
  }





    for (let i in this.orderItems) {
 console.log(i);




}
  }

/*  getActiveOrders(){
    let headers = new Headers();
    headers.append('Content-type','application-json');
    return this.http.get('http://localhost:3001/endUsers/get_active_orders')
      .map((res) => res.json());
  }*/

  getActiveOrders(username){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/endUsers/get_active_orders',username,{headers:headers})
      .map(res=>res.json());
  }

  trackOrder(order,status,pos){
    console.log(typeof pos);

    console.log(status)
  //  var main= document.getElementById('main');
    //var container = <HTMLDivElement>(document.createElement('div'));
  //var hiddenInput = document.createElement("div");
  //var hiddenInput = <HTMLDivElement>(document.createElement('div'));

  /*container.id=order+1
  hiddenInput.id =order;
  hiddenInput.className = "line"
  main.appendChild(container)
  container.appendChild(hiddenInput);*/

  //document.getElementById("mySidenav").style.width = "250px";
  console.log(order.cost)
this.x=""+pos


console.log(this.x);
  console.log(typeof this.x);
//this.totalCost += parseInt(i.totalCost)
if(document.getElementById(""+pos).innerHTML==""){
  var bar = new ProgressBar.Line("#\\3"+pos, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
  value: 'line',
  style: {
    // Text color.
    // Default: same as stroke color (options.color)
    color: '#999',
    //position: 'relative',
    right: '0',
    top: '30px',
    padding: 0,
    margin: 0,
    transform: null

  },

  autoStyleContainer: false,
  },
  //value:'Shipped',



  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
  //attachment.text.innerHTML="shipped"
  }
  });
  if(status=='placed'){
  bar.animate(0.25);
  bar.setText(status)
  }
  if(status=='processed'){
  bar.animate(0.33);
  bar.setText(status)
  }
  if(status=='Delivered'){
  bar.animate(1);
  bar.setText(status)
  }
  if(status=='ready'){
  bar.animate(0.66);
  bar.setText(status)
  }

  //bar.setText('Shipped');

}
  }





}

class OrderItem {
  constructor(public catalog: String,
              public clothName: String,
              public statusForCustomer: String,
              public cost: String,  public id:String,public length:String,
              public image: String) {
  }


}
