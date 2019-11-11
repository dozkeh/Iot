import { Injectable } from '@angular/core';
import { SENSORS } from './mock-sensors';
import { Sensor } from './sensor';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class SensordataService {

  constructor(private messageService: MessageService) { }

  getSensors(): Observable<Sensor[]> {
    this.messageService.add('Sensordata got from Azure');
    return of(SENSORS);
}
}
