import { Component } from '@angular/core';
import { input } from '@angular/core';
import { HousingLocationInfo } from '../housing-location-info';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
