import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class MerchantServicesService {

  constructor(private http: Http) { }

  getAgentsWaitingForApproval(){
    let headers = new Headers();
    headers.append('Content-type','application-json');

    return this.http.get("https://textilemanagementsystem.herokuapp.com/merchants/getAgents")
      .map((res) => res.json());
  }


  changeAgentApprovalStatus(agent){
    let headers = new Headers();
    headers.append('Content-type','application-json');
    console.log(agent);
    return this.http.post('https://textilemanagementsystem.herokuapp.com/merchants/changeAgentStatus',agent/*,{headers:headers}*/)
      .map(res=>res.json());
  }

  getActiveAgents(){
    let headers = new Headers();
    headers.append('Content-type','application-json');
    return this.http.get("https://textilemanagementsystem.herokuapp.com/merchants/getActiveAgents")
      .map((res) => res.json());
  }

  assignAgent(order){
    let headers = new Headers();
    headers.append('Content-type','application-json');
    return this.http.post("https://textilemanagementsystem.herokuapp.com/merchants/assignAgents",order).
      map(res=>res.json());
  }
  getCatalogWaitingList(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://textilemanagementsystem.herokuapp.com/merchants/getWaitingCatalog',{headers:headers})
      .map(res=>res.json());

  }
  declineWaitinglistCatalog(catalog){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://textilemanagementsystem.herokuapp.com/merchants/declineCatalog',catalog/*,{headers:headers}*/)
      .map(res=>res.json());

  }

  approveWaitinglistCatalog(catalog){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://textilemanagementsystem.herokuapp.com/merchants/approveCatalog',catalog/*,{headers:headers}*/)
      .map(res=>res.json());

  }
}
