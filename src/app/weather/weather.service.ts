import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IWeather, IOWeather } from '../weather/models/weather.interface';

@Injectable()
export class WeatherService {

    weatherBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    appid = '8bc9a0e2ffb62df71e8cf15c479af959';

    constructor(private http: Http) { }

    getWeatherByCity(city: string): Observable<IOWeather> {
        return this.http.get(`${this.weatherBaseUrl}${city}&units=metric&APPID=${this.appid}`)
            .map((res: Response) => {
                const weathers = res.json();
                return {
                    id: weathers.id,
                    name: weathers.name,
                    main: weathers.main,
                    wind: weathers.wind,
                    weather: weathers.weather,
                };
            });
    }

    getForecastByCity(city: string): Observable<any> {
        return this.http.get(`${this.forecastUrl}${city}&units=metric&mode=json&APPID=${this.appid}`)
            .map((res: Response) => {
                const weathers = res.json();
                return weathers;
            });
    }
}