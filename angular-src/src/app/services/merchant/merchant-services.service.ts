import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class MerchantServicesService {

  constructor(private http: Http) { }

  getAgentsWaitingForApproval(){
    let headers = new Headers();
    headers.append('Content-type','application-json');

    return this.http.get("http://localhost:3001/merchants/getAgents")
      .map((res) => res.json());
  }


  changeAgentApprovalStatus(agent){
    let headers = new Headers();
    headers.append('Content-type','application-json');
    return this.http.post('http://localhost:3001/merchants/changeAgentStatus',agent/*,{headers:headers}*/)
      .map(res=>res.json());
  }

  getActiveAgents(){
    let headers = new Headers();
    headers.append('Content-type','application-json');
    return this.http.get("http://localhost:3001/merchants/getActiveAgents")
      .map((res) => res.json());
  }

  assignAgent(order){
    let headers = new Headers();
    headers.append('Content-type','application-json');
    return this.http.post("http://localhost:3001/merchants/assignAgents",order).
      map(res=>res.json());
  }
  getCatalogWaitingList(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3001/merchants/getWaitingCatalog',{headers:headers})
      .map(res=>res.json());

  }
  declineWaitinglistCatalog(catalog){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/merchants/declineCatalog',catalog/*,{headers:headers}*/)
      .map(res=>res.json());

  }

  approveWaitinglistCatalog(catalog){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/merchants/approveCatalog',catalog/*,{headers:headers}*/)
      .map(res=>res.json());

  }






}
