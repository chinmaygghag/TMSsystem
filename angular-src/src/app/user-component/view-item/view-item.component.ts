import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {



  clothtypes = [];




  constructor() {


  }

  ngOnInit() {
    this.clothtypes.push(new clothTypes("SILK",
      "25"))
    this.clothtypes.push(new clothTypes("COTTON",
      "15"))
    this.clothtypes.push(new clothTypes("LINEN",
      "10"))
    this.clothtypes.push(new clothTypes("WOOL",
      "18"))
    this.clothtypes.push(new clothTypes("SYNTHETIC FIBERS",
      "20"))
    this.clothtypes.push(new clothTypes("RAYON",
      "15"))


  }






}


class clothTypes {
  constructor(private cloth: String,
              private cost: String) {

  }
}



