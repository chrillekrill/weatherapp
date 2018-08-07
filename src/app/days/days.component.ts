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
day1 = false;
day2 = false;
day3 = false;
day4 = false;
day5 = false;
day6 = false;
day7 = false;

toggleshowday1() {
  this.day1 = !this.day1;
}
toggleshowday2() {
  this.day2 = !this.day2;
}
toggleshowday3() {
  this.day3 = !this.day3;
}
toggleshowday4() {
  this.day4 = !this.day4;
}
toggleshowday5() {
  this.day5 = !this.day5;
}
toggleshowday6() {
  this.day6 = !this.day6;
}
toggleshowday7() {
  this.day7 = !this.day7;
}

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
      this.maxtemp1 = data.forecast.forecastday[0].day.maxtemp_c
      this.mintemp1 = data.forecast.forecastday[0].day.mintemp_c
      this.date2 = getDayOfWeek(data.forecast.forecastday[1].date)
      this.weather2 = data.forecast.forecastday[1].day.avgtemp_c
      this.maxtemp2 = data.forecast.forecastday[1].day.maxtemp_c
      this.mintemp2 = data.forecast.forecastday[1].day.mintemp_c
      this.date3 = getDayOfWeek(data.forecast.forecastday[2].date)
      this.weather3 = data.forecast.forecastday[2].day.avgtemp_c
      this.maxtemp3 = data.forecast.forecastday[2].day.maxtemp_c
      this.mintemp3 = data.forecast.forecastday[2].day.mintemp_c
      this.date4 = getDayOfWeek(data.forecast.forecastday[3].date)
      this.weather4 = data.forecast.forecastday[3].day.avgtemp_c
      this.maxtemp4 = data.forecast.forecastday[3].day.maxtemp_c
      this.mintemp4 = data.forecast.forecastday[3].day.mintemp_c
      this.date5 = getDayOfWeek(data.forecast.forecastday[4].date)
      this.weather5 = data.forecast.forecastday[4].day.avgtemp_c
      this.maxtemp5 = data.forecast.forecastday[4].day.maxtemp_c
      this.mintemp5 = data.forecast.forecastday[4].day.mintemp_c
      this.date6 = getDayOfWeek(data.forecast.forecastday[5].date)
      this.weather6 = data.forecast.forecastday[5].day.avgtemp_c
      this.maxtemp6 = data.forecast.forecastday[5].day.maxtemp_c
      this.mintemp6 = data.forecast.forecastday[5].day.mintemp_c
      this.date7 = getDayOfWeek(data.forecast.forecastday[6].date)
      this.weather7 = data.forecast.forecastday[6].day.avgtemp_c
      this.maxtemp7 = data.forecast.forecastday[6].day.maxtemp_c
      this.mintemp7 = data.forecast.forecastday[6].day.mintemp_c
    )
    })
  }
}
