import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecordsService} from '../records.service';

class myData {
  forecast: {forecastday: Array<any>}
}

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  dates = []
  hideme=[]

  constructor(private myFirstService : RecordsService) {
  }

  ngOnInit() {
    this.myFirstService.getData().subscribe(data => {
      this.dates = data.forecast.forecastday
    })
  }
}
