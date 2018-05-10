import { Component, OnInit } from '@angular/core';
import { MerchantServicesService} from "../../services/merchant/merchant-services.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agentapproval',
  templateUrl: './agentapproval.component.html',
  styleUrls: ['./agentapproval.component.css'],
})
export class AgentapprovalComponent implements OnInit {

  agentsList = [];

  username : String;
  changeStatus: String;

  constructor(private merchantService: MerchantServicesService,
              private _flashMessagesService: FlashMessagesService,
              private userDataService: SaveUserDataService,
              private router: Router){

  }

  ngOnInit() {
    if(this.userDataService.merchant != null){
    this.merchantService.getAgentsWaitingForApproval().subscribe(
      data => {
        if (data.success) {
          data.agents.forEach(i=>{
            if(i.name != undefined)
              // console.log(i.name);
              this.agentsList.push(new AgentApprovalModel(i.name, i.agency_name, i.registration_number));
          });
        }
      });
    }else{
      this.router.navigate(['/merchant/login']);
    }
  }




  deleteItem(item){
     {
       const index: number = this.agentsList.indexOf(item);
       const agent = {username: item,
                      changeStatus: "3"};
       this.merchantService.changeAgentApprovalStatus(agent).subscribe(
          data =>{
              if(data.success){
                this._flashMessagesService.show('Agent Declined!', { cssClass: 'alert-success', timeout: 1000 });
                this.agentsList.splice(index,1)
              }
          }
       )
    }
  }

  acceptAgent(item){
    const index: number = this.agentsList.indexOf(item);
    const agent = {username: item,
                   changeStatus: "2"};
    console.log(agent);
    this.merchantService.changeAgentApprovalStatus(agent).subscribe(
      data =>{
        if(data.success){
          this._flashMessagesService.show('Agent Approved!', { cssClass: 'alert-success', timeout: 1000 });
          this.agentsList.splice(index,1)
        }
      }
    )
  }
}

class AgentApprovalModel{
  constructor(public name: String,
              public agency_name : String ,
              public registration_number : String,
              ) {


  }
}

