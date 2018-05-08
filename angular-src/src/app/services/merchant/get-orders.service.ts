import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class GetOrdersService {

  constructor(private http: Http) { }

  getOrdersForMerchant(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3001/merchants/orderReceivedForMerchant'/*,{headers:headers}*/)
      .map(res=>res.json());
  }
  getAllOrdersForMerchant(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3001/merchants/allordersForMerchant'/*,{headers:headers}*/)
      .map(res=>res.json());
  }

  getOrdersForAgent(getOrderparam){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/agents/orderforagents',getOrderparam/*,{headers:headers}*/)
      .map(res=>res.json());
  }

  getOrdersForAgentWaiting(getOrderparam){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/agents/orderforagentsWaiting',getOrderparam/*,{headers:headers}*/)
      .map(res=>res.json());
  }




  acceptDeclineOrder(item){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/agents/acceptDeclineOrder',item)
      .map(res=>res.json());
  }
}
