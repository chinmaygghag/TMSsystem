import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class GetCatalogsService {

  constructor(private http: Http) { }

  getCatalog(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://textilemanagementsystem.herokuapp.com/create/getCatalogElements',{headers:headers})
      .map(res=>res.json());

  }


  getTopCatalog(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://textilemanagementsystem.herokuapp.com/create/getTopCatalog',{headers:headers})
      .map(res=>res.json());

  }


}
