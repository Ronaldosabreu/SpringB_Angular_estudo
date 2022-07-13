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

//
//no construtor:  this.header.set('Access-Control-Allow-Origin', '*');
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

    post(menu: ParkingSpotModel): Observable<ParkingSpotModel>
    {
     
      return this.httpCliente.post<ParkingSpotModel>(this.apuUrl  + "menus", menu,this.httpOption);
    }
    update(menu: ParkingSpotModel): Observable<ParkingSpotModel>
    {
      //patch edita parte do objeto
      //put edita parte do objeto
      return this.httpCliente.patch<ParkingSpotModel>(this.apuUrl  + "menus/" + menu.id, menu , this.httpOption);
    }
  
    delete(id: string): Observable<any>
    {
     
      return this.httpCliente.delete(this.apuUrl  + "menus/" + id, this.httpOption);
    }

    // post(menu: Menu): Observable<Menu>
    // {
    //   return this.http.post<Menu>(this.UrlServiceMenu  + "menus", menu,{ headers: this.header });
    // }

}
