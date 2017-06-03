import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherComponent } from '../weather/containers/weather.component';

import { WeatherSearchComponent } from '../weather/components/weather-search/weather-search.component';
import { WeatherWidgetComponent } from '../weather/components/weather-widget/weather-widget.component';
import { WeatherForecastComponent } from '../weather/components/weather-forecast/weather-forecast.component';

import { WeatherService } from '../weather/weather.service';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ WeatherComponent, WeatherSearchComponent, WeatherWidgetComponent, WeatherForecastComponent ],
    providers: [ WeatherService ],
    exports: [ WeatherComponent ]
})
// tslint:disable-next-line:eofline
export class WeatherModule { }