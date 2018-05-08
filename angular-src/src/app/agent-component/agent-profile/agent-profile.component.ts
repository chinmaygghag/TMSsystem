import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import {AuthserviceService} from "../../services/agent/authservice.service";

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {

  agent  =  {};
  constructor(private userDataService: SaveUserDataService,
              private router: Router,
              private agentService: AuthserviceService) { }

  ngOnInit() {
    if(this.userDataService.agentName != null){
      const username = {
        username : this.userDataService.agentName
      };
      this.agentService.getAgent(username).subscribe(data=>{
        if (data.success) {
          console.log(data);
          this.agent = {
              "agency_name": data.agent_obj.agency_name,
              "name": data.agent_obj.name,
              "email" : data.agent_obj.email,
              "address" : data.agent_obj.address,
              "registration_number" : data.agent_obj.registration_number,
            };
            // if(i._id != undefined)
        }
      })
    }else{
      this.router.navigate(['/user/login']);
    }
  }

  openDetails(){
    // this.router.navigate(['/agent/profile']);
  }

}

class Agent {
  constructor(public agency_name: String,
              public name: String,
              public email: String,
              public address: String,
              public registration_number: String){

  }
}
