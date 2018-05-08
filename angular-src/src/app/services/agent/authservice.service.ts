import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthserviceService {

  authToken : any;
  user : any;

  constructor(private http: Http) { }

  registerAgent(agent){
    let headers = new Headers();
    console.log(agent);
    headers.append('Content-Type','application/json');
    return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/register',agent,{headers:headers})
      .map(res=>res.json());
  }

  loginAgent(agent){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/authenticate',agent,{headers:headers})
      .map(res=>res.json());
  }

  getAgent(username){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://textilemanagementsystem.herokuapp.com/agents/get_agent-profile',username,{headers:headers})
      .map(res=>res.json());
  }

}
