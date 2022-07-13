import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Link, ParkingSpotModel } from 'src/app/shared/model/parking-spotModel.model';
import { ParkingService } from 'src/app/shared/service/parking.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-parking',
  templateUrl: './list-parking.component.html',
  styleUrls: ['./list-parking.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListParkingComponent implements OnInit {

  parkings: ParkingSpotModel[];

  parkingLoad: boolean=false;
  

  displayedColumns: string[] = ['id','parkingSpotNumber','responsibleName','actions'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];


  constructor(public httpClient: HttpClient, public service: ParkingService) { }
  expandedElement = ParkingSpotModel;
  
  ngOnInit() 
  {
    this.getParkings();
  }

  getParkings()
    {
      setTimeout(()=>
      {
        this.service.getParkingWithPage(0,10).subscribe(data=>{
            this.parkings = data.content;
            console.log(this.parkings)

            this.parkingLoad = true;
        });
      },3000);
    }
    teste(element: ParkingSpotModel)
    {
      console.table(element);
    }
}
