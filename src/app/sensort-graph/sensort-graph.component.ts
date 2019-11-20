import { Component, OnInit } from '@angular/core';
import { scaleDiverging } from 'd3';
import { SensordataService } from '../sensordata.service';
import { SensorRaw } from '../sensor-raw';

@Component({
  selector: 'app-sensort-graph',
  templateUrl: './sensort-graph.component.html',
  styleUrls: ['./sensort-graph.component.scss']
})
export class SensortGraphComponent implements OnInit {
 public chartData: any[];
 public chartLabels: string[] = ['1', '2', '3', '4', '5'];
 public showChartLegend = true;
 public chartColors: any[] = [
   {
     backgroundColor: 'transparent',
     borderColor: 'rgba(117,225,222,1)'
     //pointBackgroundColor, pointBorderColor, pointHoverBackgroundColor, pointHoverBorderColor
    }]; 


 chartOptions = {responsive: true};

  constructor(private serverData: SensordataService) { }

  ngOnInit() {

    this.getChartData();

}

getChartData(): any[] {
  let myData: any[];
  if (this.serverData.myResponse == undefined)
  {
    myData = [];
  }
  else {
  myData = [{data: [], label: 'Temperature Bathroom'}];
  this.serverData.myResponse.forEach((sensor: SensorRaw, i) => {myData[0].data.push(sensor.Value) });
  console.log(myData);
}
  this.chartData = myData;
}
}
