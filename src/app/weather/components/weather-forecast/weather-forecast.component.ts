import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-weather-forecast',
    templateUrl: 'weather-forecast.component.html'
})

export class WeatherForecastComponent {
    imgUrl = 'http://openweathermap.org/img/w/';

    @Input()
    forecast: any;

// tslint:disable-next-line:eofline
}