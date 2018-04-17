import { Component, OnInit } from '@angular/core';
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private saveUserData: SaveUserDataService,
              private router: Router) {
  }

  ngOnInit() {
      if (this.saveUserData.username != null){

      } else {
        this.router.navigate(['/user/login']);
      }
    }


}
