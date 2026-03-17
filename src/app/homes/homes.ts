import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location-info';

@Component({
  selector: 'app-homes',
  imports: [HousingLocation],
  templateUrl: './homes.html',
  styleUrl: './homes.css',
})
export class Homes {
readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
housingLocation: HousingLocationInfo = {
id: 9999,
name: 'Test Home',
city: 'Test city',
state: 'ST',
photo: `${this.baseUrl}/example-house.jpg`,
availableUnits: 99,
wifi: true,
laundry: false,
};
}
