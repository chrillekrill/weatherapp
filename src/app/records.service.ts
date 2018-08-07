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
    return this.http.get<myData>('http://api.apixu.com/v1/forecast.json?key=26139d4e102045b7a39170537180608&q=stockholm&days=7')

  }
}
