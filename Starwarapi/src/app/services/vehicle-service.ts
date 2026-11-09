import { inject, input, Service } from '@angular/core';
import { VehicleListPage } from '../components/vehicle-list-page/vehicle-list-page';
import { VehicleItemPage } from '../components/vehicle-item-page/vehicle-item-page';
import { VehicleListResponse } from '../interfaces/vehicle-list-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class VehicleService {
    vehicle = inject(HttpClient);
    

    getAll(): Observable<VehicleListResponse>{
        return this.http.get<VehicleListResponse>('https://swapi.dev/api/vehicles/')
    }
}
