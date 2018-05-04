import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import {Headers, Http} from "@angular/http";
import {CreatCatalogServiceService} from "../../services/catalogService/creat-catalog-service.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customize-catalog',
  templateUrl: './customize-catalog.component.html',
  styleUrls: ['./customize-catalog.component.css']
})
export class CustomizeCatalogComponent implements OnInit {

  desc: String;
  title: String;
  filename: String;
  status: String;

  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;

  @ViewChild('fileInput') fileInput;

  constructor(private userDataService : SaveUserDataService,
              private createcatalog: CreatCatalogServiceService,
              private router: Router,
              private _flashMessagesService: FlashMessagesService,
              private http: Http) { }

  ngOnInit() {
    if(this.userDataService.username != null){


    }else{
      this.router.navigate(['/user/login']);

    }
  }

  onCreateCatalogSubmit(){
    const create = {
      imageURL: this.filename,
      desc: this.desc,
      title: this.title,
      status: "waiting"
    };

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
      this.http.post('http://localhost:3001/create/upload', formData, {headers: headers})
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
