import { Component, inject, signal } from '@angular/core';
import { VehicleItemPage } from '../vehicle-item-page/vehicle-item-page';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleService } from '../../services/vehicle-service';

@Component({
  imports: [VehicleItemPage],
  selector: 'app-vehicle-list-page',
  styleUrl: './vehicle-list-page.css',
  templateUrl: './vehicle-list-page.html',
})
export class VehicleListPage {

  vehicleService = inject(VehicleService);
  modalService = inject(NgbModal)

  vehicleList= signal<Vehicle[]>([]);
  
  ngOnInit():void{
    this.vehicleService.getAll().subscribe(vehicle) =>{
      this.vehicleList.set(this.vehicleList.result);
    }
  }
}
