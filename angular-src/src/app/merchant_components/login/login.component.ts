import { Component, OnInit } from '@angular/core';
import {ValidateserviceService} from "../../services/merchant/validateservice.service";
import {MerchantAuthServiceService} from "../../services/merchant/merchant-auth-service.service";
import {Router} from "@angular/router";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private validateService: ValidateserviceService,
              private authService: MerchantAuthServiceService,
              private router: Router,
              private saveUserSession: SaveUserDataService
              ) { }

  ngOnInit() {

    this.saveUserSession.merchant = "";
  }

  onLoginSubmit(){
    const merchant = {
      username: this.username,
      password: this.password
    };

    if(this.authService.checkMerchantLogin(merchant)){
      this.saveUserSession.merchant = this.username;
      this.router.navigate(['/merchant/home']);
    }
  }

}
