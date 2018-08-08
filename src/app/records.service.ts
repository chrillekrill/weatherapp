import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface myData {
  main: Object
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {
  }
  getData() {
    return this.http.get<myData>('https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=e8fcb354d30f73585557ab4fe293cefa')
  }
}
