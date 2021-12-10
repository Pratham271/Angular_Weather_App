import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  city = '';
  data : any = '';
  description = '';
  ngOnInit() {
  }
  async checkweather()
  {
    if (this.city){
    this.data = await (await fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=3265874a2c77ae4a04bb96236a642d2f')).json();
    console.log(this.data, this.city)
    this.data.main.temp_max = Math.floor(this.data.main.temp_max-273).toString();
    this.data.main.temp_min = Math.floor(this.data.main.temp_min - 273).toString() ;
    // this.data.sys.sunrise = new Date(this.data.sys.sunrise);
    this.data.main.feels_like = Math.floor(this.data.main.feels_like- 273).toString() ;
    this.description = this.data.weather[0].description;
    }
  }
}
