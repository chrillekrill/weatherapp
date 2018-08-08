import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DaysComponent } from './days/days.component';
import { RecordsService} from './records.service';

@NgModule({
  declarations: [
    AppComponent,
    DaysComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
