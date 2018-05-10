import { Component, OnInit } from '@angular/core';
import {MerchantServicesService} from "../../services/merchant/merchant-services.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";

@Component({
  selector: 'app-approve-catalog',
  templateUrl: './approve-catalog.component.html',
  styleUrls: ['./approve-catalog.component.css']
})
export class ApproveCatalogComponent implements OnInit {

  catalogList = [];
  cost = [];

  title : String;
  changeStatus: String;

  constructor(private merchantService: MerchantServicesService,
              private _flashMessagesService: FlashMessagesService,
              private router: Router,
              private userDataService: SaveUserDataService) {

  }

  ngOnInit() {
    if (this.userDataService.merchant != null) {
      this.merchantService.getCatalogWaitingList().subscribe(data => {
        console.log(data.success);
        if (data.success) {
          data.catalogs.forEach(
            i => {
              console.log(i);
              const imageUrl = i.imageURL;
              this.catalogList.push(new Catalog(i._id, imageUrl, i.title, i.desc));
            });
          console.log(this.catalogList);
        }
      });


    } else {
      this.router.navigate(['/merchant/login']);
    }
  }

  approveCatalog(catalog,index){

    const catalogObj = {
      id: catalog.id,
      unitLengthCost: this.cost[index]
    };
    console.log(catalogObj);
    this.merchantService.approveWaitinglistCatalog(catalogObj).subscribe(
      data =>{
        if(data.success){
          this._flashMessagesService.show('Catalog Approved', { cssClass: 'alert-success', timeout: 1000 });
          this.cost[index]=0;
          this.catalogList.splice(index,1)
        }
      }
    )
  }

  declineCatalog(catalog,index){
    const catalogObj = {
      id: catalog.id
    };
    this.merchantService.declineWaitinglistCatalog(catalogObj).subscribe(
      data =>{
        if(data.success){
          this._flashMessagesService.show('Catalog Declined', { cssClass: 'alert-success', timeout: 1000 });
          this.cost[index]=0;
          this.catalogList.splice(index,1)
        }
      }
    )
  }
}


class Catalog {
  constructor(public id: String,
              public imageURL: String,
              public title: String,
              public desc: String) {
  }
}
