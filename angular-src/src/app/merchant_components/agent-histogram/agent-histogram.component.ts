import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MerchantServicesService} from "../../services/merchant/merchant-services.service";

@Component({
  selector: 'app-agent-histogram',
  templateUrl: './agent-histogram.component.html',
  styleUrls: ['./agent-histogram.component.css']
})
export class AgentHistogramComponent implements OnInit {
  agents = [];
  acceptOrds = [];
  declineOrds = [];
  receivedOrds = [];
  deliveredOrds = [];
  acceptOrdsData = null;
  declineOrdsData = null;
  receivedOrdsData = null;
  deliveredOrdsData = null;
  demoAgents = null;
  chart = [];

  public barChartLabels:string[] = [] ;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  constructor( private router:Router,
               private getActiveAgents: MerchantServicesService) {}


  ngOnInit() {
    this.getActiveAgents.getActiveAgents().subscribe(
      data => {
        if (data.success) {
          console.log(data);
          data.agent.forEach(i=>{
            if(i.name != undefined)
              console.log(i.name);
            this.agents.push(String(i.name));
            this.acceptOrds.push(String(i.orders.acceptOrders));
            this.declineOrds.push(String(i.orders.declineOrders));
            this.receivedOrds.push(String(i.orders.receivedOrders));
            this.deliveredOrds.push(String(i.orders.deliveredOrders));
          });

          let receivedOrdsData = JSON.stringify(this.receivedOrds);
          let acceptOrdsData = JSON.stringify(this.acceptOrds);
          let declineOrdsData = JSON.stringify(this.declineOrds);
          let deliveredOrdsData = JSON.stringify(this.deliveredOrds);
          let demoAgent = JSON.stringify(this.agents);
          this.receivedOrdsData = JSON.parse(receivedOrdsData);
          this.acceptOrdsData = JSON.parse(acceptOrdsData);
          this.declineOrdsData = JSON.parse(declineOrdsData);
          this.deliveredOrdsData = JSON.parse(deliveredOrdsData);
          this.demoAgents = JSON.parse(demoAgent);
          console.log(this.demoAgents);
          console.log(this.acceptOrdsData);
          console.log(this.declineOrdsData);
          console.log(this.receivedOrdsData);
          console.log(this.deliveredOrdsData);


          let datad = [];

          let barChartLabels = this.demoAgents;
          this.barChartLabels = barChartLabels;

          datad[0] = this.acceptOrdsData;
          datad[1] = this.declineOrdsData;
          datad[2] = this.receivedOrdsData;
          datad[3] = this.deliveredOrdsData;

          let barChartData:any[] = [
            {data: [], label: 'Orders Received'},
            {data: [], label: 'Orders accepted'},
            {data: [], label: 'Orders Declined' },
            {data: [], label: 'Orders Delivered'}
          ];

          this.barChartData[0]['data'] = datad[0];
          this.barChartData[1]['data'] = datad[1];
          this.barChartData[2]['data'] = datad[2];
          this.barChartData[3]['data'] = datad[3];
          /*this.barChartData.forEach((data,index)=>{

            this.barChartData[index]  = Object.assign({},this.barChartData[index],{
              data: [this.barChartData[index].data,datad[index]]
            })
          })
*/
          //let clone = JSON.parse(JSON.stringify(barChartData));

//          this.barChartLabels = [this.barChartLabels, barChartLabels];

          //clone[0].data = datad;
          //console.log("++++++++" + clone[1].data);
          //clone[0][0].data = datad[0];
          //clone[0][1].data = datad[1];
          //clone[0][2].data = datad[2];
          //clone[0][3].data = datad[3];

          //this.barChartData = barChartData;
          //console.log(clone[0]);
          //this.barChartData = clone;
        }
      });
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  /*
  this.demoAgents


  {data: this.receivedOrdsData, label: 'Orders Received'},
  {data: this.acceptOrdsData, label: 'Orders accepted'},
  {data: this.declineOrdsData, label: 'Orders Declined' },
  {data: this.deliveredOrdsData, label: 'Orders Delivered'}
  */

  public barChartData:any[] = [
    {data: this.receivedOrdsData, label: 'Orders Received'},
    {data: this.acceptOrdsData, label: 'Orders accepted'},
    {data: this.declineOrdsData, label: 'Orders Declined' },
    {data: this.deliveredOrdsData, label: 'Orders Delivered'}
  ];

  public barChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  /*public randomize():void {
    // Only Change 3 values
    let data = this.agents.orders ;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }*/

}
