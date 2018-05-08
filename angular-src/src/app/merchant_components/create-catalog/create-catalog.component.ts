import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from "@angular/router";
import {CreatCatalogServiceService} from "../../services/catalogService/creat-catalog-service.service";
import {Observable} from "rxjs/Observable";
import {Http,Headers} from "@angular/http";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";

@Component({
  selector: 'app-create-catalog',
  templateUrl: './create-catalog.component.html',
  styleUrls: ['./create-catalog.component.css']
})
export class CreateCatalogComponent implements OnInit {

  unitLengthCost: String;
  desc: String;
  title: String;
  filename: String;

  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;

  @ViewChild('fileInput') fileInput;

  constructor(private createcatalog: CreatCatalogServiceService,
              private router: Router,
              private _flashMessagesService: FlashMessagesService,
              private http: Http,
              private userDataService: SaveUserDataService) { }

  ngOnInit() {
    if (this.userDataService.merchant != null){

    } else{
      this.router.navigate(['/merchant/login']);
    }
  }

  onCreateCatalogSubmit(){
    const create = {
      imageURL: this.filename,
      unitLengthCost: this.unitLengthCost,
      desc: this.desc,
      title: this.title,
      status: "approved"
    };
    console.log("This is in TS "+create);
    this.createcatalog.uploadimage(create).subscribe(data=>{
      if (data.success){
        this._flashMessagesService.show('Catalog Added Successfully', { cssClass: 'alert-success', timeout: 1000 });
      }
    })
}

  fileChangeEvent(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      const headers = new Headers();
      this.http.post('https://textilemanagementsystem.herokuapp.com//create/upload', formData, {headers: headers})
        .map(res => res.json())
        // .catch(error => Observable.throw(error))
        .subscribe(data => {
            const Response = data.success;
            if (Response) {
              // this.uploadFile.push(data);
              console.log(data)
              this.filename = data.filename;
            } else {
              // this.showFileError = data['_error'];
            }
          }
        );
    }
  }


}
