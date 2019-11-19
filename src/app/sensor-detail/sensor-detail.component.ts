import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../sensor';
import { SensorRaw } from '../sensor-raw';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.scss']
})
export class SensorDetailComponent implements OnInit {

  @Input() sensor: SensorRaw;
  constructor() { }

  ngOnInit() {
  }

}
