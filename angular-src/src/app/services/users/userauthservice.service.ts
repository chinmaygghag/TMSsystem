import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserauthserviceService {

  authToken : any;
  user : any;
  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post('http://localhost:3001/endUsers/register',user,{headers:headers})
      .map(res=>res.json());
  }
  loginUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/endUsers/authenticate',user,{headers:headers})
      .map(res=>res.json());
  }

  getUser(username){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/endUsers/get_user-profile',username,{headers:headers})
      .map(res=>res.json());
  }
}
