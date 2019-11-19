import { Injectable } from '@angular/core';
import { Sensor } from './sensor';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ReplyAzure } from './reply-azure';
import { map } from 'rxjs/operators';
import { SensorFactory } from './sensor-factory';

@Injectable({
  providedIn: 'root'
})

export class SensordataService {

  
  private azureDbUrl = 'https://myiotdb.table.core.windows.net';  // URL to azure database
  private sv = 'sv=2019-02-02';
  private ss = 'ss=bfqt';
  private srt = 'srt=sco';
  private sp = 'sp=rwdlacup';
  private se = 'se=2019-11-19T19:16:12Z';
  private st = 'st=2019-11-19T11:16:12Z';
  private spr = 'spr=https';
  private sig = 'sig=RuFY%2Fhtz83PIDpNiGMG5VnWv%2FAwenvXVaCemjRfFC7Q%3D';


  constructor(private http: HttpClient, private messageService: MessageService) {
   }

   private log(message: string) {
    this.messageService.add(`SensorService: ${message}`);
   }

   getSensors(): Observable<ReplyAzure> { 
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
   this.log('got data from azure');
   return response;
  }

}
