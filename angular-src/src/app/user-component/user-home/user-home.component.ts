import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private router: Router,
              private userData: SaveUserDataService) { }

  ngOnInit() {
    console.log(this.userData.username);
  }

  /*plainPage(){
    this.router.navigate(['/user/plain']);
  }
  verticalPage(){
    this.router.navigate(['/user/vertical']);
  }
  horizontalPage(){
    this.router.navigate(['/user/horizontal']);
  }
  crossPage(){
    this.router.navigate(['/user/cross']);
  }*/


  viewCatalogue(){
    this.router.navigate(['/user/home/viewcatalog']);
  }



  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
