import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecordsService} from '../records.service';

interface myData {
  main: Object
}
function getDayOfWeek(date) {
  var dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {
  dates = {}
  date1 = {}
  weather1 = {}
  date2 = {}
  weather2 = {}
  date3 = {}
  weather3 = {}
  date4 = {}
  weather4 = {}
  date5 = {}
  weather5 = {}
  date6 = {}
  weather6 = {}
  date7 = {}
  weather7 = {}

  constructor(private myFirstService : RecordsService) {
  }

  ngOnInit() {
    this.dates = this.myFirstService.getData().subscribe(data => {
      console.log(data)
      this.date1 = getDayOfWeek(data.forecast.forecastday[0].date)
      this.weather1 = data.forecast.forecastday[0].day.avgtemp_c
      this.date2 = getDayOfWeek(data.forecast.forecastday[1].date)
      this.weather2 = data.forecast.forecastday[1].day.avgtemp_c
      this.date3 = getDayOfWeek(data.forecast.forecastday[2].date)
      this.weather3 = data.forecast.forecastday[2].day.avgtemp_c
      this.date4 = getDayOfWeek(data.forecast.forecastday[3].date)
      this.weather4 = data.forecast.forecastday[3].day.avgtemp_c
      this.date5 = getDayOfWeek(data.forecast.forecastday[4].date)
      this.weather5 = data.forecast.forecastday[4].day.avgtemp_c
      this.date6 = getDayOfWeek(data.forecast.forecastday[5].date)
      this.weather6 = data.forecast.forecastday[5].day.avgtemp_c
      this.date7 = getDayOfWeek(data.forecast.forecastday[6].date)
      this.weather7 = data.forecast.forecastday[6].day.avgtemp_c
    )
    })
  }
}
