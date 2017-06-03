import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-weather-search',
    styleUrls: ['weather-search.component.css'],
    template:
    `
    <input type="text" name="search" [(ngModel)] = "model.searchTerm" (keyup)="search($event)" placeholder="Search City ...">
    `
})

export class WeatherSearchComponent {
    model: {searchTerm: string} = { searchTerm: null };

    @Output()
    changed: EventEmitter<string> = new EventEmitter<string>();

    search(event: any) {
      event.preventDefault();
      this.changed.emit(this.model.searchTerm); // Raise changed event
    }

// tslint:disable-next-line:eofline
}