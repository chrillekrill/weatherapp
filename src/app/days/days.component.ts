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
  humidity1 = {}
  icon1 = {}
  information1 = {}
  date2 = {}
  weather2 = {}
  humidity2 = {}
  icon2 = {}
  date3 = {}
  weather3 = {}
  humidity3 = {}
  icon3 = {}
  date4 = {}
  weather4 = {}
  humidity4 = {}
  icon4 = {}
  date5 = {}
  weather5 = {}
  humidity5 = {}
  icon5 = {}
  date6 = {}
  weather6 = {}
  humidity6 = {}
  icon6 = {}
  date7 = {}
  weather7 = {}
  humidity7 = {}
  icon7 = {}

  constructor(private myFirstService : RecordsService) {
  }

  ngOnInit() {
    this.dates = this.myFirstService.getData().subscribe(data => {
      console.log(data)
      this.date1 = getDayOfWeek(data.forecast.forecastday[0].date)
      this.weather1 = data.forecast.forecastday[0].day.avgtemp_c
      this.maxtemp1 = data.forecast.forecastday[0].day.maxtemp_c
      this.mintemp1 = data.forecast.forecastday[0].day.mintemp_c
      this.humidity1 = data.forecast.forecastday[0].day.avghumidity
      this.icon1 = data.forecast.forecastday[0].day.condition.icon
      this.information1 = data.forecast.forecastday[0].day.condition.text
      this.date2 = getDayOfWeek(data.forecast.forecastday[1].date)
      this.weather2 = data.forecast.forecastday[1].day.avgtemp_c
      this.maxtemp2 = data.forecast.forecastday[1].day.maxtemp_c
      this.mintemp2 = data.forecast.forecastday[1].day.mintemp_c
      this.humidity2 = data.forecast.forecastday[1].day.avghumidity
      this.icon2 = data.forecast.forecastday[1].day.condition.icon
      this.information2 = data.forecast.forecastday[1].day.condition.text
      this.date3 = getDayOfWeek(data.forecast.forecastday[2].date)
      this.weather3 = data.forecast.forecastday[2].day.avgtemp_c
      this.maxtemp3 = data.forecast.forecastday[2].day.maxtemp_c
      this.mintemp3 = data.forecast.forecastday[2].day.mintemp_c
      this.humidity3 = data.forecast.forecastday[2].day.avghumidity
      this.icon3 = data.forecast.forecastday[2].day.condition.icon
      this.information3 = data.forecast.forecastday[2].day.condition.text
      this.date4 = getDayOfWeek(data.forecast.forecastday[3].date)
      this.weather4 = data.forecast.forecastday[3].day.avgtemp_c
      this.maxtemp4 = data.forecast.forecastday[3].day.maxtemp_c
      this.mintemp4 = data.forecast.forecastday[3].day.mintemp_c
      this.humidity4 = data.forecast.forecastday[3].day.avghumidity
      this.icon4 = data.forecast.forecastday[3].day.condition.icon
      this.information4 = data.forecast.forecastday[3].day.condition.text
      this.date5 = getDayOfWeek(data.forecast.forecastday[4].date)
      this.weather5 = data.forecast.forecastday[4].day.avgtemp_c
      this.maxtemp5 = data.forecast.forecastday[4].day.maxtemp_c
      this.mintemp5 = data.forecast.forecastday[4].day.mintemp_c
      this.humidity5 = data.forecast.forecastday[4].day.avghumidity
      this.icon5 = data.forecast.forecastday[4].day.condition.icon
      this.information5 = data.forecast.forecastday[4].day.condition.text
      this.date6 = getDayOfWeek(data.forecast.forecastday[5].date)
      this.weather6 = data.forecast.forecastday[5].day.avgtemp_c
      this.maxtemp6 = data.forecast.forecastday[5].day.maxtemp_c
      this.mintemp6 = data.forecast.forecastday[5].day.mintemp_c
      this.humidity6 = data.forecast.forecastday[5].day.avghumidity
      this.icon6 = data.forecast.forecastday[5].day.condition.icon
      this.information6 = data.forecast.forecastday[5].day.condition.text
      this.date7 = getDayOfWeek(data.forecast.forecastday[6].date)
      this.weather7 = data.forecast.forecastday[6].day.avgtemp_c
      this.maxtemp7 = data.forecast.forecastday[6].day.maxtemp_c
      this.mintemp7 = data.forecast.forecastday[6].day.mintemp_c
      this.humidity7 = data.forecast.forecastday[6].day.avghumidity
      this.icon7 = data.forecast.forecastday[6].day.condition.icon
      this.information7 = data.forecast.forecastday[6].day.condition.text
    )})
  }
}
