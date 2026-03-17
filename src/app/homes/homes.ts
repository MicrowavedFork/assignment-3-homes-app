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
filteredLocationList: HousingLocationInfo[] = [];

constructor() {
this.housingLocationList = this.housingService.getAllHousingLocations();
this.filteredLocationList = this.housingLocationList;
}
filterResults(text: string) {
if (!text) {
this.filteredLocationList = this.housingLocationList;
return;
}
this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
);
}
}
