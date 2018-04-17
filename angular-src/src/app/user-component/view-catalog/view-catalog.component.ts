import { Component, OnInit } from '@angular/core';
import {CreatCatalogServiceService} from "../../services/catalogService/creat-catalog-service.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {GetCatalogsService} from "../../services/catalogService/get-catalogs.service";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import {PlaceOrderService} from "../../services/placeorders/place-order.service";

@Component({
  selector: 'app-view-catalog',
  templateUrl: './view-catalog.component.html',
  styleUrls: ['./view-catalog.component.css']
})
export class ViewCatalogComponent implements OnInit {


  catalogList = [];
  cost: String;
  userObject;

  // to place order
  catalogname: String;
  finalcost: String;


  constructor(private catalogService:GetCatalogsService,
  private _flashMessagesService: FlashMessagesService,
              private userDataService: SaveUserDataService,
              private placeOrderService: PlaceOrderService) {

  }

  ngOnInit() {
    this.userObject = this.userDataService.username;
    console.log(this.userObject);
    this.catalogService.getCatalog().subscribe(data=>
    {
      console.log(data.success);
      if(data.success){
        data.catalogs.forEach(
          i=>{
              const imageUrl = "../../../assets/"+i.imageURL;
              this.catalogList.push(new Catalog(imageUrl,i.title,i.desc,i.unitLengthCost));
          });
        console.log(this.catalogList);
      }
      });
  }


  changeCost(unitCost){
    console.log(unitCost,length);
    this.cost = (length * unitCost) + "";
  }


  placeOrder(catalog){
    const orderElement = {
      catalogName: catalog.title,
      username: this.userObject,
      finalcost: "$50"
    };

    this.placeOrderService.placeOrders(orderElement).subscribe(
      data => {
        if (data.success) {
          console.log(data.msg)
          this._flashMessagesService.show('Order Placed Successfully!', { cssClass: 'alert-success', timeout: 1000 });
        }
      });



  }

}
  class Catalog {
    constructor(public imageURL: String,
                public title: String,
                public desc: String,
                public unitLengthCost: String) {
    }
  }
class CustomArray<T> extends Array<T> {
  add(element: T) {
    console.log(element);
    this.push(element);
  }

}
class PlaceOrder{
  constructor(
    public catalogName: String,
    public finalcost: String,
    public username: String
  ){

  }
}

