import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class GetOrdersService {

  constructor(private http: Http) { }

  getOrdersForMerchant(orders){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3001/merchants/orderReceivedForMerchant',orders/*,{headers:headers}*/)
      .map(res=>res.json());
  }

}
