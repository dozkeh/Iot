import { Component, OnInit } from '@angular/core';
import { Sensor } from '../sensor';
import { SensordataService } from '../sensordata.service';
import { ReplyAzure } from '../reply-azure';
import { SensorRaw } from '../sensor-raw';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  sensors: SensorRaw[] = [];
  selectedSensor: Sensor;

  constructor(private sensordataService: SensordataService) { }

  ngOnInit() {
    this.getSensors();
  }

  onSelect(sensor: Sensor): void {
    this.selectedSensor = sensor;
  }

  getSensors(): void {
    /*this.sensordataService.getSensors()
    .subscribe(replyAzure => { this.sensors = replyAzure.value; });
    console.log(this.sensors);*/
  }
}

