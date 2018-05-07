import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import {UserauthserviceService} from "../../services/users/userauthservice.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user  =  {};

  constructor(private userDataService: SaveUserDataService,
              private router: Router,
              private userService: UserauthserviceService) { }

  ngOnInit() {

    if(this.userDataService.username != null){
      const username = {
        username : this.userDataService.username
      };
      this.userService.getUser(username).subscribe(data=>{
        if (data.success) {
          console.log(data.User);
          this.user = {
            "name": data.User.name,
            "email" : data.User.email,
            "username" : data.User.username

          };
          // if(i._id != undefined)
        }


      })
    }else{
      this.router.navigate(['/user/login']);
    }
  }

  openDetails(){
    // this.router.navigate(['/agent/profile']);
  }

}

class User {
  constructor(
              public name: String,
              public email: String,
              public username: String
             ){

  }
}
