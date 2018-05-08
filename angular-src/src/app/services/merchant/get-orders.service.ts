import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class GetOrdersService {

  constructor(private http: Http) { }

  getOrdersForMerchant(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://textilemanagementsystem.herokuapp.com/merchants/orderReceivedForMerchant'/*,{headers:headers}*/)
      .map(res=>res.json());
  }
  getAllOrdersForMerchant(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://textilemanagementsystem.herokuapp.com/merchants/allordersForMerchant'/*,{headers:headers}*/)
      .map(res=>res.json());
  }

  getOrdersForAgent(getOrderparam){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/orderforagents',getOrderparam/*,{headers:headers}*/)
      .map(res=>res.json());
  }

  getOrdersForAgentWaiting(getOrderparam){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/orderforagentsWaiting',getOrderparam/*,{headers:headers}*/)
      .map(res=>res.json());
  }




  acceptDeclineOrder(item){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/acceptDeclineOrder',item)
      .map(res=>res.json());
  }
}
