import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingSpotModel } from '../model/parking-spotModel.model';
import { ResponseParking } from '../model/responseParking.model';

@Injectable({
    providedIn:'root'
})
export class ParkingService {

    // /parking-spot?page=0&size=1
apuUrl='http://localhost:8080/parking-spot';
httpOption={headers: new HttpHeaders({'Contect-type':'application/json'})}

constructor(private httpCliente: HttpClient)
{ }

    public getParkingWithPage(page: number, size: number): Observable<ResponseParking>
    {
        return this.httpCliente.get<ResponseParking>( ` ${this.apuUrl}?page=${page}&size=${size} ` )
    }

    public postParking(car: ParkingSpotModel): Observable<ParkingSpotModel>
    {
        return this.httpCliente.post<ParkingSpotModel>( ` ${this.apuUrl}`, car, this.httpOption);
    }

}
