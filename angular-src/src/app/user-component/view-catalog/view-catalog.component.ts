import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {GetCatalogsService} from "../../services/catalogService/get-catalogs.service";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import {PlaceOrderService} from "../../services/placeorders/place-order.service";
import {CartServiceService} from "../../services/cart/cart-service.service";



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
  finalcost: number;
  cloth_length : number;
  unitLength: number;


  constructor(private catalogService:GetCatalogsService,
              private _flashMessagesService: FlashMessagesService,
              private userDataService: SaveUserDataService,
              private placeOrderService: PlaceOrderService,
              private cartService : CartServiceService) {

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


  addToCart(catalog){
    this.unitLength = catalog.unitLengthCost;
    const totalCost = this.cloth_length*this.unitLength;
    const cartItem = {
      username : this.userDataService.username,
      catalogName : catalog.title,
      lengthEntered: this.cloth_length,
      catalogImage: catalog.imageURL,
      clothName: "Silk",
      totalCost : totalCost
    };
    console.log("here");
    this.cartService.addToCart(cartItem).subscribe(data=>{
      if (data.success){
        console.log("Added to Cart")
      }
    })
  }
}

class Catalog {
  constructor(public imageURL: String,
              public title: String,
              public desc: String,
              public unitLengthCost: String) {
  }

}

