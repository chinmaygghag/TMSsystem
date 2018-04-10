import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  agentDrop:boolean;
  merchantDrop:boolean;
  userDrop:boolean;

  constructor(private router:Router) { }

  ngOnInit() {
    this.userDrop = true;
  }

  routeToAgentLogin(){
    this.router.navigate(['/agent/login']);
    this.agentDrop = true;
    this.merchantDrop = false;
    this.userDrop = false;
  }

  routeToMerchantLogin(){
    this.router.navigate(['/merchant/login']);
    this.agentDrop = false;
    this.merchantDrop = true;
    this.userDrop = false;
  }

  routeToUserLogin(){
    this.router.navigate(['/user/login']);
    this.agentDrop = false;
    this.merchantDrop = false;
    this.userDrop = true;
  }


}
