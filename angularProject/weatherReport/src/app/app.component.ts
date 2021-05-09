import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'weatherReport';
  apiKey: string = "27dfa3b355c5f581b81951c52caffc09";
  cityVal: string;
  prevValue: string;
  url: string = "https://api.openweathermap.org/data/2.5/weather?";
  weatherKey: string = "appid=27dfa3b355c5f581b81951c52caffc09"
  data: any = {};

  constructor(private api: AppService) { }

  ngOnInit() {
    this.prevValue = this.cityVal;
  }

  saveValue() {
    this.prevValue = this.cityVal;
  }

  processChange() {
    if (this.cityVal !== this.prevValue) {
      let apiUrl = `${this.url}q=${this.cityVal}&${this.weatherKey}`
      this.api.getAll(apiUrl).subscribe((results) => {
        this.data = JSON.stringify(results);
        console.log('JSON Response = ', JSON.stringify(results));
      })
    }
  }
  "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=27dfa3b355c5f581b81951c52caffc09"
}
