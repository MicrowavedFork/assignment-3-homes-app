import { Component } from '@angular/core';
import { input } from '@angular/core';
import { HousingLocationInfo } from '../housing-location-info';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink,RouterModule,RouterOutlet],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
