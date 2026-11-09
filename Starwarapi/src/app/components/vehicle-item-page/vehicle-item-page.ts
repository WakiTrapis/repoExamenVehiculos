import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-vehicle-item-page',
  styleUrl: './vehicle-item-page.css',
  templateUrl: './vehicle-item-page.html',
})
export class VehicleItemPage {
  vehicle = input<Vehicle>();

  id: string = '';

  getId(id: string) {
    id = this.vehicle()?.url.split('/')[5]!;
  }

  

  
}
