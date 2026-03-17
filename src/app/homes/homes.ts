import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location-info';
import { HousingService } from '../housing-service';

@Component({
  selector: 'app-homes',
  imports: [HousingLocation],
  templateUrl: './homes.html',
  styleUrl: './homes.css',
})
export class Homes {
// readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
housingLocationList: HousingLocationInfo[] = [];
housingService: HousingService = inject(HousingService);

constructor(){
  this.housingLocationList = this.housingService.getAllHousingLocations();
}
}
