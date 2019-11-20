import { Injectable } from '@angular/core';
import { Sensor } from './sensor';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ReplyAzure } from './reply-azure';
import { map } from 'rxjs/operators';
import { SensorFactory } from './sensor-factory';
import { SensorsComponent } from './sensors/sensors.component';
import { SensorRaw } from './sensor-raw';

@Injectable({
  providedIn: 'root'
})

export class SensordataService {

  public myResponse: SensorRaw[] = undefined;

  private azureDbUrl = 'https://myiotdb.table.core.windows.net';  // URL to azure database
  private sv = 'sv=2019-02-02';
  private ss = 'ss=bfqt';
  private srt = 'srt=sco';
  private sp = 'sp=rwdlacup';
  private se = 'se=2019-11-20T22:40:16Z';
  private st = 'st=2019-11-20T14:40:16Z';
  private spr = 'spr=https';
  private sig = 'sig=Dd4Ol6CgWDv8BitTu%2BtGZo5hPllq6OYHV8oml3nEYRg%3D';


  constructor(private http: HttpClient, private messageService: MessageService) {
    this.getSensors();
    console.log(this.myResponse);
   }

   private log(message: string) {
    this.messageService.add(`SensorService: ${message}`);
   }

   getSensors(): void { 
   let headers = new HttpHeaders();
   headers = headers.append('Content-Type', 'application/json');
   headers = headers.append('Accept', 'application/json');
   headers = headers.append('Access-Control-Allow-Origin', '*');
   const params = new HttpParams();
   // tslint:disable-next-line: max-line-length
   const requestUrl = `${this.azureDbUrl}/sensors?${this.sv}&${this.ss}&${this.srt}&${this.sp}&${this.se}&${this.st}&${this.spr}&${this.sig}`;
   // tslint:disable-next-line: max-line-length
   const response: Observable<ReplyAzure> = this.http.get<ReplyAzure>(requestUrl, { headers, params });
    /*).pipe(
      map(myReply.value =>
        myReply.value.map(s => SensorFactory.fromRaw(s)),
      )
    );*/
    response.subscribe(replyAzure => { this.myResponse = replyAzure.value; });
   this.log('got data from azure');
  }


}
