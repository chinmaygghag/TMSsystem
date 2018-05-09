import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SliderModule } from 'angular-image-slider';
import {GetCatalogsService} from "../../services/catalogService/get-catalogs.service";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  imagesUrl=[];


  catalogList = [];
  // cost: String;
  userObject;

  // to place order
  catalogname: String;
  finalcost: number;
  cloth_length : any=[];
  unitLength: number;

  cost = [];

  clothtypes = [];
  selectedItem: Object = {};

  clothType: String;


  //public imagesUrl;

  constructor(private router: Router,
              private SliderModule: SliderModule,private catalogService:GetCatalogsService, private userDataService: SaveUserDataService) { }

  ngOnInit() {

   /* this.imagesUrl = [
      'https://static.contrado.com/resources/images/2017-2/55807/sensation-silk-fabric-online-110251.jpg',
      'https://img.etsystatic.com/il/10e9ce/797187829/il_570xN.797187829_cjpy.jpg?version=0',
      'https://static.contrado.com/resources/images/2015-4/18010/fabric-printing-services-19013_l.jpg',
      //'https://img.etsystatic.com/il/544a69/884357753/il_fullxfull.884357753_2r9p.jpg?version=0',
      // 'https://pixel.nymag.com/imgs/thecut/slideshows/2016/06/india-fasntastique/india-fantastique-07.nocrop.w530.h670.jpg'
    ]*/

    if(this.userDataService.username != null){
      this.userObject = this.userDataService.username;
      this.catalogService.getTopCatalog().subscribe(data=>
      {
        console.log(data.success);
        if(data.success){
          data.catalogs.forEach(
            i=>{
              const imageUrl = "https://textilemanagementsystem.herokuapp.com/assets/"+i.imageURL;
              this.imagesUrl.push(imageUrl);
              this.catalogList.push(new Catalog(imageUrl,i.title,i.desc,i.unitLengthCost));
            });
          console.log(this.catalogList);
        }
      });
    }else{
      this.router.navigate(['/user/login']);
    }


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

class Catalog {
  constructor(public imageURL: String,
              public title: String,
              public desc: String,
              public unitLengthCost: String) {
  }
}

