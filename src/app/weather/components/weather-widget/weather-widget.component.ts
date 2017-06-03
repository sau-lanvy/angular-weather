import { Component, Input } from '@angular/core';

import { IOWeather } from '../../../weather/models/weather.interface';

@Component({
    selector: 'app-weather-widget',
    templateUrl: 'weather-widget.component.html'
})

export class WeatherWidgetComponent {
    imgUrl = 'http://openweathermap.org/img/w/';

    @Input()
    weather: IOWeather;

    @Input()
    date: Date;

// tslint:disable-next-line:eofline
}