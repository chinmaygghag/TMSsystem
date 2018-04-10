import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from "@angular/router";
import {CreatCatalogServiceService} from "../../services/catalogService/creat-catalog-service.service";

@Component({
  selector: 'app-create-catalog',
  templateUrl: './create-catalog.component.html',
  styleUrls: ['./create-catalog.component.css']
})
export class CreateCatalogComponent implements OnInit {

  imageURL: String;
  unitLengthCost: String;
  desc: String;
  title: String;

  constructor(private createcatalog: CreatCatalogServiceService,
              private router: Router,
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onCreateCatalogSubmit(){
    const create = {
      imageURL: this.imageURL,
      unitLengthCost: this.unitLengthCost,
      desc: this.desc,
      title: this.title,
    };

    this.createcatalog.uploadimage(create).subscribe(data => {
      if (data.success) {
        console.log("upload Successful!");
        // this.router.navigate(['/merchant/home/createcatalog']);
      }else{
        this._flashMessagesService.show('Image uploaded!', { cssClass: 'alert-success', timeout: 1000 });
      }
    });
  }
}
